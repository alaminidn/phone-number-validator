import React, { Component } from 'react'

class Root extends Component {
    render() {
        return (
            <div class='container'>
                <div className="root-container">
                    <div className="main-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor='phone'>Phone Number</label>
                                <input type='text' className='form-control' id='phone' placeholder='Enter Phone Number' />
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Check Validity" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Root
