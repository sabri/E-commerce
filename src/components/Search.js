import React, { Component } from 'react'
import './Slide.css'
import {DataViewLayoutOptions} from "primereact/dataview";
import {Dropdown} from "primereact/dropdown";
import {Slider} from 'primereact/slider';
import {Row,Col} from 'react-bootstrap'
export default class Search extends Component {
    constructor() {
        super();
        this.state = { 
            layout: 'list',
            sortKey: null,
            sortOrder: null,
            rangeValues: [20, 80] 

        };
        this.onChangeRangeSlider = this.onChangeRangeSlider.bind(this);

        this.onSortChange = this.onSortChange.bind(this);
    }
    onSortChange(event) {
        const value = event.value;

        if (value.indexOf('!') === 0) {
            this.setState({
                sortOrder: -1, 
                sortField: value.substring(1, value.length), 
                sortKey: value
            });
        }
        else {
            this.setState({
                sortOrder: 1, 
                sortField: value, 
                sortKey: value
            });
        }
    }

    onChangeRangeSlider(e) {
        this.setState({ rangeValues: e.value });
    }
  render() {
    const sortOptions = [
        {label: 'Newest First', value: '!year'},
        {label: 'Oldest First', value: 'year'},
        {label: 'Brand', value: 'brand'}
    ];
    return (
<div className="search">


<Row>
    <Col >           
             <Dropdown options={sortOptions} value={this.state.sortKey} placeholder="Sort By" onChange={this.onSortChange}  style={{textAlign:"left"}}/>
</Col>

<Col>

</Col>
<Col style={{textAlign:"right"}}>
<DataViewLayoutOptions layout={this.state.layout} onChange={(e) => this.setState({layout: e.value})} style ={{textAlign:"right"}}/>  
</Col>
  </Row>
  </div>   
               
    )
  }
}

     
