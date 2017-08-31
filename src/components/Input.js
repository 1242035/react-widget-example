import React, { PropTypes } from 'react';

const Input = ({ name, value, label, type, onChange }) => (
    <div className="form-group">
        {label && <label className="col-md-2 control-label">{label}</label>}
        <div className="col-md-10">
            <input {...{ name, value, type, onChange }} className="form-control"/>
        </div>
    </div>
);

const { string, func } = PropTypes;

Input.propTypes = {
    name: string.isRequired,
    value: string.isRequired,
    label: string,
    type: string.isRequired,
    onChange: func.isRequired
};

export default Input;
