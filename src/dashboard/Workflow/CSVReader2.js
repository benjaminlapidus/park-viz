import React, { Component } from 'react';
import { CSVReader } from 'react-papaparse';


export default function CSVReader2(props) {
    const handleOnDrop = (data) => {
        // console.log('---------------------------');
        // console.log(data);
        // console.log('---------------------------');
        var users = [];
        for (let i = 0; i < data.length; i++) {
            users.push(data[i].data)
        }
        props.passUserData(users)
    };

    const handleOnError = (err, file, inputElem, reason) => {
        console.log(err);
    };

    const handleOnRemoveFile = (data) => {
        // console.log('---------------------------');
        // console.log(data);
        // console.log('---------------------------');
    };

    return (
        <>
            <CSVReader
                onDrop={handleOnDrop}
                onError={handleOnError}
                addRemoveButton
                onRemoveFile={handleOnRemoveFile}
            >
                <h1></h1>
                <h4>Drop CSV file here or click to upload.</h4>
                <h1></h1>
            </CSVReader>
        </>
    );
}