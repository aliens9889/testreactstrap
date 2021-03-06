import React, { Component } from 'react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Input} from 'reactstrap'


class LoanAssetCalculation extends Component {

    constructor(props) {
        super(props)
        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false,
          assetAge: [0,1,2,3,4,5]
        };
    }

    toggle() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
      }

    render () {
        return (
            <div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <Input 
                            type="text" 
                            className="form-control"
                            id="loanValue"
                            placeholder="Loan Value"
                            />
                    </div>
                    <div className="form-group col-md-4">
                        <Input 
                            type="text" 
                            className="form-control" 
                            id="assetValue"
                               placeholder="Asset Value"
                               />
                    </div>

                    <div className="form-group col-md-3">
                        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} group size="md">
                            <DropdownToggle caret className="btn-select">
                                Car Age
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>{this.state.assetAge[0]}</DropdownItem>
                                <DropdownItem>{this.state.assetAge[1]}</DropdownItem>
                                <DropdownItem>{this.state.assetAge[2]}</DropdownItem>
                                <DropdownItem>{this.state.assetAge[3]}</DropdownItem>
                                <DropdownItem>{this.state.assetAge[4]}</DropdownItem>
                                <DropdownItem>{this.state.assetAge[5]}</DropdownItem>                                
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                    <div className="col-md-1">
                        <i className="fa fa-circle-o-notch fa-spin fa-2x fa-fw"></i>
                    </div>
                    {/*<div className="form-group col-md-3">
                        <Input type="text" className="form-control" id="inputCity"/>
                    </div>*/}
                </div>
            </div>
        );
    }

}

export default LoanAssetCalculation