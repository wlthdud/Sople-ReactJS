import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "지소영",
        comment: "안녕하세요. 지소영입니다.",
    },
    {
        name: "이혁진",
        comment: "안녕하세요. 이혁진입니다.",
    },
    {
        name: "헬로키티",
        comment: "안녕하세요. 헬로키티입니다.",
    },
];

function CommentList(props){
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;