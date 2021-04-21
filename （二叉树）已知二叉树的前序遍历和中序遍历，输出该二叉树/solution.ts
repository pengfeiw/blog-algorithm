interface TreeNode {
    /**
     * 当前值
     */
    name: string;
    /**
     * 左子树和右子树，0为左子树，1为右子树
     */
    children?: TreeNode[]
}

const getBinaryTree = (preTraversal: string[], midTraversal: string[]): TreeNode => {
    if (preTraversal.length !== midTraversal.length) {
        throw new Error("输入参数有误！");
    }
    if (preTraversal.length === 0) {
        return {name: null};
    }
    if (preTraversal.length === 1) {
        if (preTraversal[0] !== midTraversal[0]) {
            throw new Error("输入参数有误！");
        } else {
            return {
                name: preTraversal[0].toString()
            }
        }
    }

    const rootValue = preTraversal[0]; // 根节点

    const rootIndex = midTraversal.indexOf(rootValue)
    const leftMidTraverSal = midTraversal.slice(0, rootIndex); // 左子树的中序遍历
    const rightMidTraversal = midTraversal.slice(rootIndex + 1); // 右子树的中序遍历

    const leftPreTraversal: string[] = []; // 左子树的前序遍历
    let rightPreTraversal: string[] = []; // 右子树的前序遍历
    let i = 1;
    for (; i < preTraversal.length; i++) {
        const value = preTraversal[i];
        if (leftMidTraverSal.indexOf(value) !== -1) {
            leftPreTraversal.push(value);
        } else {
            break;
        }
    }
    rightPreTraversal = preTraversal.slice(i);

    const leftTree = getBinaryTree(leftPreTraversal, leftMidTraverSal);
    const rightTree = getBinaryTree(rightPreTraversal, rightMidTraversal);

    return {
        name: rootValue.toString(),
        children: [
            leftTree,
            rightTree
        ]
    }
};

const button = document.getElementById("btnDraw");
const chartDom = document.getElementById("main");
const myChart = (window as any).echarts.init(chartDom);
button.onclick = () => {
    myChart.clear();
    const input1 = document.getElementById("pretraversal") as HTMLInputElement;
    const input2 = document.getElementById("midtraversal") as HTMLInputElement;
    const preStr = input1.value;
    const midStr = input2.value;
    const preArr = preStr.split(",");
    const midArr = midStr.split(",");

    const data = getBinaryTree(preArr, midArr);

    var option = {
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },
        series: [
            {
                type: 'tree',
                id: 0,
                name: 'tree1',
                data: [data],
                orient: 'vertical',

                symbolSize: 7,

                edgeShape: 'polyline',
                edgeForkPosition: '63%',
                initialTreeDepth: 3,

                lineStyle: {
                    width: 2
                },

                label: {
                    position: 'top',
                    rotate: -90,
                    verticalAlign: 'middle',
                    align: 'right',
                    fontSize: 15
                },

                leaves: {
                    label: {
                        position: 'bottom',
                        rotate: -90,
                        verticalAlign: 'middle',
                        align: 'left'
                    }
                },

                emphasis: {
                    focus: 'descendant'
                },

                expandAndCollapse: true,
                animationDuration: 550,
                animationDurationUpdate: 750
            }
        ]
    };

    myChart.setOption(option);
};
