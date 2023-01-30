import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        id: 1,
        message: "안녕하세요, 오늘 일정을 알려드립니다.",
    },
    {
        id: 2,
        message: "점심 식사 시간입니다.",
    },
    {
        id: 3,
        message: "이제 곧 미팅이 시작됩니다.",
    },
];

var timer;

class NotificationList extends React.Component{
    constructor(props){
        super(props);

        this.state = {  //생성자에서는 앞으로 사용할 데이터를 state에 넣어서 초기화
            notifications: [],
        };
    }

    componentDidMount() {  //클래스 컴포넌트의 생명주기 함수 중 하나
        const { notifications } = this.state;
        timer = setInterval(() => {
            if(notifications.length < reservedNotifications.length){
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({  //state를 업데이트 하기 위한 setState() 함수 사용
                    notifications: notifications,
                });
            }else{
                this.setState({
                    notifications: [],
                });
                clearInterval(timer);
            }
        }, 1000);
    }

    render(){
        return (
            <div>
                {this.state.notifications.map((notification) => {
                    return (
                        <Notification 
                            key={notification.id}
                            id={notification.id}
                            message={notification.message} 
                        />
                    );     
                })}
            </div>
        );
    }
}

export default NotificationList;