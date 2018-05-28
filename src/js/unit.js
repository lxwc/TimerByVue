import Vue from 'vue';

const unit = {
    install(Vue, options) {
        Vue.prototype.snow = function snow() {
            function Obj() {};
            Obj.prototype.draw = function(o) {
                var speed = 0; //雪花每次下落的数值（10px）
                var startPosLeft = Math.ceil(Math.random() * document.documentElement.clientWidth); //设置雪花随机的开始x值的大小
                o.style.opacity = (Math.ceil(Math.random() * 3) + 7) / 10; //设置透明度
                o.style.left = startPosLeft + 'px';
                o.style.color = randomColor();
                o.style.fontSize = 12 + Math.ceil(Math.random() * 14) + 'px';
                o.style.transform = `rotate(${Math.random()*180}deg)`;
                setInterval(function() {
                    //雪花下落的top值小鱼屏幕的可视区域高时执行下列
                    if (speed < document.documentElement.clientHeight) {
                        o.style.top = speed + 'px';
                        o.style.left = startPosLeft + Math.ceil(Math.random() * 8) + 'px';
                        speed += 5;
                    } else {
                        o.style.display = 'none';
                    }
                }, 400);
            };
            //随机色
            function randomColor() {
                return `rgb(${Math.ceil(Math.random() * 255)},${Math.ceil(Math.random() * 255)},${Math.ceil(Math.random() * 255)})`;
            };
            var flame = document.getElementById('flame');

            /*使用setInterval定时器每800毫秒创建一个雪花*/
            setInterval(function() {
                var odiv = document.createElement('div'); //创建div
                odiv.innerHTML = "❥"; //div的内容
                odiv.style.position = 'absolute'; //div的绝对定位
                flame.appendChild(odiv); //把创建好的div放进flame中
                var obj = new Obj(); //创建函数
                obj.draw(odiv); //执行obj的draw方法
            }, 500);
        }
    }
};

export default unit;