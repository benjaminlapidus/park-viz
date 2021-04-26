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
            <h5>Click and Drag Upload</h5>
            <CSVReader
                onDrop={handleOnDrop}
                onError={handleOnError}
                addRemoveButton
                onRemoveFile={handleOnRemoveFile}
            >
                <span>Drop CSV file here or click to upload.</span>
            </CSVReader>
        </>
    );
}