import React, { Component } from 'React';
import propTypes from 'prop-types';

const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';

const range = (from, to, step = 1) => {
    let i = from;
    const rangearray = [];
    while (i <= to) {
        rangearray.push(i);
        i += step;
    }

    return rangearray;
};

export class Pagination extends Component {
    constructor(props) {
        super(props);
        const { totalRecords = null, pageLimit = 30, pageNeighbours = 0 } = props;
    }
}
