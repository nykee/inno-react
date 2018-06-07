import React from 'react';

class BMap extends React.Component {
    constructor() {
        super();
        this.state = {
            city:'上海',
            lat:121.429,
            lon:31.184,
            hosName:'上海市第六人民医院'
        };

    }
    componentWillReceiveProps(nextProps){
        // console.log(nextProps);
        /*this.setState({
            city:nextProps.city,
            lat:nextProps.lat,
            lon:nextProps.lon
        });*/
        var BMap = window.BMap ;//取出window中的BMap对象
        var map = new BMap.Map("bmap-container"); // 创建Map实例
        var point = new BMap.Point(nextProps.lat, nextProps.lon);
        map.centerAndZoom(point, 15); // 初始化地图,设置中心点坐标和地图级别
        // map.addControl(new BMap.MapTypeControl()); //添加地图类型控件
        map.setCurrentCity(nextProps.city); // 设置地图显示的城市 此项是必须设置的
        map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放

        var marker = new BMap.Marker(point);
        map.addOverlay(marker);

        marker.addEventListener("click", ()=>{
            var opts = {
                width : 250,     // 信息窗口宽度
                height: 100,     // 信息窗口高度
                title : nextProps.city  // 信息窗口标题
            };

            var infoWindow = new BMap.InfoWindow(nextProps.hospName, opts);
            map.openInfoWindow(infoWindow, point);      // 打开信息窗口
        });
    }
    componentWillMount(){
        /*this.setState({
            city:this.props.city,
            lat:this.props.lat,
            lon:this.props.lon
        });*/
    }
    componentDidMount() {
        /*this.setState({
            city:this.props.city,
            lat:this.props.lat,
            lon:this.props.lon
        });*/


        var BMap = window.BMap ;//取出window中的BMap对象
        var map = new BMap.Map("bmap-container"); // 创建Map实例

        map.centerAndZoom(new BMap.Point(this.state.lat, this.state.lon), 15); // 初始化地图,设    置中心点坐标和地图级别
        // map.addControl(new BMap.MapTypeControl()); //添加地图类型控件
        map.setCurrentCity(this.state.city); // 设置地图显示的城市 此项是必须设置的
        map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
        var point = new BMap.Point(this.state.lat, this.state.lon);
        var marker = new BMap.Marker(point);
        map.addOverlay(marker);


        marker.addEventListener("click", ()=>{
            var opts = {
                width : 250,     // 信息窗口宽度
                height: 100,     // 信息窗口高度
                title : this.state.city  // 信息窗口标题
            };

            var infoWindow = new BMap.InfoWindow(this.state.hosName, opts);
            map.openInfoWindow(infoWindow, point);      // 打开信息窗口
        });


    }

    render() {
        return (
            <div id='bmap-container'>
            </div>

        )
    }
}

export default BMap;