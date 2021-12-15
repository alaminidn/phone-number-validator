import React, { Component } from 'react'
import '../style/style.css'

class Root extends Component {
    render() {
        return (
            <div class='container'>
                <div className="root-container d-flex justify-content-center">
                    <div className="main-body w-md-50 bg-light p-5 rounded">
                        <form>
                            <div className='form-group'>
                                <label htmlFor='phone'>Enter phone number</label>
                                <input
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    className='form-control'
                                    // value={natural}
                                    onChange={this.handleChange}
                                    onKeyPress={this.handleKeyPress}
                                    placeholder='Ex: +8801XX-XXXXXXX'
                                />
                            </div>
                            <div className='form-group my-3'>
                                <input
                                    type="button"
                                    className='btn btn-sm btn-success'
                                    // onClick={this.handleSubmit}
                                    value="Check Validity"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Root
