import React from 'react'

function Arrays() {

    const students = ['Thushara', 'Lakshan'];
    students.push('Kalana');

    return (
        <>
            {
                students.map(function (fruit, index) {
                    return <div>{index + 1}. {fruit}</div>
                })
            }
        </>
    )
}

export default Arrays
