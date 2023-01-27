import React from "react";
import Comment from "./Comment";

function CommentList(props){
    return (
        <div>
            <Comment name={"지소영"} comment={"안녕하세요. 지소영입니다."} />
            <Comment name={"이혁진"} comment={"안녕하세요. 이혁진입니다."} />
        </div>
    );
}

export default CommentList;