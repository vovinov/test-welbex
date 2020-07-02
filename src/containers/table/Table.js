import React, {Component} from 'react';
import DataList from '../../components/dataList';
import ErrorBoundary from '../errorBoundary';
import Pagination from '../../components/pagination';
import SvgIcon from '../../components/svgIcon';

import {getResource} from '../../utils';

import _ from 'lodash';

import './table.css';

export default class Table extends Component {

    state = {
        data: [],
        currentPage: 1,
        rowsPerPage: 6,
        sortField: '',
        sortOrder: ''
    }

    componentDidMount() {
        this.getData();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.sortField !== this.state.sortField || 
            prevState.sortOrder !== this.state.sortOrder) {
            this.sortData(this.state.data)
        }
    }

    getData() {
        getResource('data')
        .then(data => data.map(item => {
            return {
                date: item[0],
                name: item[1],
                count: item[2],
                distance: item[3]  
            }
        }))
        .then(data => this.setState({data:data}))
    }

    changePage = pageNumber => this.setState({currentPage: pageNumber})

    searchAlgoritm = (data) => {
        const {searchData} = this.props;
        if (Object.keys(searchData).length === 0 || searchData.value === '') {
            return data
        } else {
            return data.filter(item => {
                switch (searchData.operator) {
                    case 'equally': 
                        // eslint-disable-next-line eqeqeq
                        return item[searchData.type] == searchData.value
                    case 'contains':
                        return item[searchData.type].toString().includes(searchData.value) 
                    case 'more':
                        return item[searchData.type] > searchData.value
                    case 'less':
                        return item[searchData.type] < searchData.value
                    default:
                        return data
                } 
            })
        }
    }

    changeSortOrder = (name) => {
        const sortSwitch = this.state.sortOrder === 'asc' ? 'desc' : 'asc';
        this.setState({
            sortOrder: sortSwitch, 
            sortField: name
        });
    }

    sortData = (data) => {        
        const cloneData = data.concat();
        const sortedData = _.orderBy(cloneData, this.state.sortField, this.state.sortOrder)
        this.setState({data: sortedData});
    }

    render() {

        const {data, currentPage, rowsPerPage, sortOrder, sortField} = this.state;

        const {searchData} = this.props;

        const indexOfLastPost = currentPage * rowsPerPage;
        const indexOfFirstPost = indexOfLastPost - rowsPerPage;
        const filteredData = this.searchAlgoritm(data);
        const currentRows = filteredData.slice(indexOfFirstPost, indexOfLastPost);

        return (
            <>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Дата</th>
                            <th scope="col">
                                <div className="table-heading">
                                    <span id="name">Название</span>                                                                
                                    <SvgIcon                                         
                                        onSvgClick={() => this.changeSortOrder('name')} 
                                        order={sortField === 'name' ? sortOrder : null} />
                                </div>
                            </th>
                            <th scope="col">
                                <div className="table-heading">
                                    <span id="count">Количество</span>                                                                
                                    <SvgIcon 
                                        onSvgClick={() => this.changeSortOrder('count')} 
                                        order={sortField === 'count' ? sortOrder : null} />
                                </div>
                            </th>
                            <th scope="col">
                                <div className="table-heading">
                                    <span id="distance"> Расстояние</span>                                                                
                                    <SvgIcon 
                                        onSvgClick={() => this.changeSortOrder('distance')} 
                                        order={sortField === 'distance' ? sortOrder : null} />
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <ErrorBoundary>
                        <DataList 
                            searchData={searchData} 
                            data={currentRows} />
                    </ErrorBoundary>  
                </table>
                <Pagination 
                    rowsPerPage={rowsPerPage}
                    totalRows={filteredData.length}
                    changePage={this.changePage}
                    currentPage={currentPage}
                />
            </>
        )
    }
}
