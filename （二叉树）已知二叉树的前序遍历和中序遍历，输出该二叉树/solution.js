var getBinaryTree = function (preTraversal, midTraversal) {
    if (preTraversal.length !== midTraversal.length) {
        throw new Error("输入参数有误！");
    }
    if (preTraversal.length === 0) {
        return { name: null };
    }
    if (preTraversal.length === 1) {
        if (preTraversal[0] !== midTraversal[0]) {
            throw new Error("输入参数有误！");
        }
        else {
            return {
                name: preTraversal[0].toString()
            };
        }
    }
    var rootValue = preTraversal[0]; // 根节点
    var rootIndex = midTraversal.indexOf(rootValue);
    var leftMidTraverSal = midTraversal.slice(0, rootIndex); // 左子树的中序遍历
    var rightMidTraversal = midTraversal.slice(rootIndex + 1); // 右子树的中序遍历
    var leftPreTraversal = []; // 左子树的前序遍历
    var rightPreTraversal = []; // 右子树的前序遍历
    var i = 1;
    for (; i < preTraversal.length; i++) {
        var value = preTraversal[i];
        if (leftMidTraverSal.indexOf(value) !== -1) {
            leftPreTraversal.push(value);
        }
        else {
            break;
        }
    }
    rightPreTraversal = preTraversal.slice(i);
    var leftTree = getBinaryTree(leftPreTraversal, leftMidTraverSal);
    var rightTree = getBinaryTree(rightPreTraversal, rightMidTraversal);
    return {
        name: rootValue.toString(),
        children: [
            leftTree,
            rightTree
        ]
    };
};
var button = document.getElementById("btnDraw");
var chartDom = document.getElementById("main");
var myChart = window.echarts.init(chartDom);
button.onclick = function () {
    myChart.clear();
    var input1 = document.getElementById("pretraversal");
    var input2 = document.getElementById("midtraversal");
    var preStr = input1.value;
    var midStr = input2.value;
    var preArr = preStr.split(",");
    var midArr = midStr.split(",");
    var data = getBinaryTree(preArr, midArr);
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
