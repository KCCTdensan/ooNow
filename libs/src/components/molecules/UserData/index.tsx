import React from "react";
import { css } from "@emotion/react"

type DataType = {
    name: string,
    age: number,
    trend: string, /* その人が多く発信していたなうを記録したい */
}

const UserData: React.FC<DataType> = ({name, age, trend}) => {
    
    return (
        <div>
            <ul>
                <li>
                ユーザー名-
                <ul>
                    <li>{name}</li>
                </ul>
                </li>
                <li>
                年齢-
                <ul>
                    <li>{age}</li>
                </ul>
                </li>
                <li>
                トレンド-
                <ul>
                    <li>{trend}</li>
                </ul>
                </li>
            </ul>
        </div>
    )
}

export default UserData