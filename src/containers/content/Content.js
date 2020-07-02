import React, { Component } from 'react';

import Table from '../table';
import SearchPanel from '../../components/searchpanel';

import './content.css';

export class Content extends Component {

    state = {
        searchData: {}
    }

    searchData = (data) => {
        this.setState({searchData: data})
    }

    render() {

        return (
            <div className="content">
                <SearchPanel searchData={this.searchData}/>
                <Table searchData={this.state.searchData} />
            </div>
        )
    }
}

export default Content
