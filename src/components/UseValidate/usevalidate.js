/* eslint-disable no-fallthrough */

import { useState } from "react";


export const useValidate = () => {
    const [error, setError] = useState({})
    const pattern = new RegExp((/^\+375\(\d{2}\)\d{7}$/))
    const number = new RegExp((/[0-9]/))



    const validate = (name, value) => {

        switch (name) {
            case 'firstName': {
                console.log(value)
                if (value.length < 2 || value.length > 15) {
                    setError({ ...error, firstName: 'incorrect length!' })
                } else {
                    setError({ ...error, firstName: '' })
                }
                break
            }
            case 'phone': {
                console.log(value)
                if (!pattern.test(value)) {
                    setError({ ...error, phone: 'Please enter valid Mobile Number!' })
                } else {
                    setError({ ...error, phone: '' })
                }
                break
            }
            case 'street': {

                if (value.length < 3 || value.length > 15) {
                    setError({ ...error, street: 'incorrect length!' })
                } else {
                    setError({ ...error, street: '' })
                }
                break
            }
            case 'house': {

                if (!number.test(value)) {
                    setError({ ...error, house: 'please enter numbers!' })
                } else {
                    setError({ ...error, house: '' })
                }
                break
            }
            case 'apartment': {

                if (!number.test(value)) {
                    setError({ ...error, apartment: 'please enter numbers!' })
                } else {
                    setError({ ...error, apartment: '' })
                }
                break
            }
            case 'entrance': {

                if (!number.test(value)) {
                    setError({ ...error, entrance: 'please enter numbers!' })
                } else {
                    setError({ ...error, entrance: '' })
                }
                break
            }
            case 'floor': {

                if (!number.test(value)) {
                    setError({ ...error, floor: 'please enter numbers!' })
                } else {
                    setError({ ...error, floor: '' })
                }
                break
            }
            case 'comment': {

                if (value.length < 0 || value.length > 50) {
                    setError({ ...error, comment: 'incorrect length!' })
                } else {
                    setError({ ...error, comment: '' })
                }
                break
            }

            default: break
        }

    }


    return { error, validate }
}