import {
    DISPLAY_ALERT,
    CLEAR_ALERT,
    REGISTER_USER_ERROR,
    REGISTER_USER_BEGIN,
    REGISTER_USER_SUCCESS,
    LOGIN_USER_ERROR,
    LOGIN_USER_BEGIN,
    LOGIN_USER_SUCCESS,
    UPDATE_USER_ERROR,
    UPDATE_USER_BEGIN,
    UPDATE_USER_SUCCESS,
    CREATE_JOB_ERROR,
    CREATE_JOB_BEGIN,
    CREATE_JOB_SUCCESS,
    TOGGLE_SIDEBAR,
    LOGOUT_USER,
    HANDLE_CHANGE,
    CLEAR_VALUES,
    GET_JOBS_BEGIN,
    GET_JOBS_SUCCESS,
    SET_EDIT_JOB,
    DELETE_JOB_BEGIN,
    EDIT_JOB_ERROR,
    EDIT_JOB_BEGIN,
    EDIT_JOB_SUCCESS,
} from "./actions"
import { initialState } from "./appContext"

const reducer = (state, action) => {
    if (action.type === DISPLAY_ALERT) {
        return {
            ...state,
            showAlert: true,
            alertText: 'Please provide all values',
            alertType: 'danger'
        }
    }
    if (action.type === CLEAR_ALERT) {
        return {
            ...state,
            showAlert: false,
            alertText: '',
            alertType: ''
        }
    }
    if (action.type === REGISTER_USER_BEGIN) {
        return {
            ...state,
            isLoading: true,
        }
    }
    if (action.type === REGISTER_USER_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            token: action.payload.token,
            user: action.payload.user,
            userLocation: action.payload.location,
            jobLocation: action.payload.location,
            showAlert: true,
            alertType: 'success',
            alertText: 'User Created! Redirectiong...'
        }
    }
    if (action.type === REGISTER_USER_ERROR) {
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: 'danger',
            alertText: action.payload.msg
        }
    }

    if (action.type === LOGIN_USER_BEGIN) {
        return {
            ...state,
            isLoading: true,
        }
    }
    if (action.type === LOGIN_USER_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            token: action.payload.token,
            user: action.payload.user,
            userLocation: action.payload.location,
            jobLocation: action.payload.location,
            showAlert: true,
            alertType: 'success',
            alertText: 'Login Successful! Redirectiong...'
        }
    }
    if (action.type === LOGIN_USER_ERROR) {
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: 'danger',
            alertText: action.payload.msg
        }
    }

    if (action.type === UPDATE_USER_BEGIN) {
        return {
            ...state,
            isLoading: true,
        }
    }
    if (action.type === UPDATE_USER_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            token: action.payload.token,
            user: action.payload.user,
            userLocation: action.payload.location,
            jobLocation: action.payload.location,
            showAlert: true,
            alertType: 'success',
            alertText: 'User Profilr Updated!'
        }
    }
    if (action.type === UPDATE_USER_ERROR) {
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: 'danger',
            alertText: action.payload.msg
        }
    }

    if (action.type === TOGGLE_SIDEBAR) {
        return {
            ...state,
            showSidebar: !state.showSidebar
        }
    }
    if (action.type === LOGOUT_USER) {
        return {
            ...initialState,
            token: null,
            user: null,
            userLocation: '',
            jobLocation: '',

        }
    }
    if(action.type === HANDLE_CHANGE) {
        
        return {
            ...state,
            [action.payload.name]: action.payload.value
        }
    }
    if(action.type === CLEAR_VALUES) {
        const initialVlauesState = {
            isEditing: false,
            editJobId: '',
            position: '',
            company: '',
            jobType: 'full-time',
            status: "pending",
            jobLocation: state.userLocation
        
        }
        return {
            ...state,
            ...initialVlauesState
        }
    }

    if(action.type === CREATE_JOB_BEGIN) {
        return {
            ...state,
            isLoading: true
        }
    }
    if(action.type === CREATE_JOB_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: 'success',
            alertText: 'job created'
        }
    }
    if(action.type === CREATE_JOB_ERROR) {
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: 'danger',
            alertText: action.payload.msg
        }
    }
    if (action.type === GET_JOBS_BEGIN) {
        return {
            ...state,
            isLoading: true,
        }
    }
    if(action.type === GET_JOBS_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            jobs: action.payload.jobs,
            totalJobs: action.payload.totalJobs,
            numOfPages: action.payload.numOfPages,
        }
    }
    if(action.type === SET_EDIT_JOB) {
        const job = state.jobs.find((job) => job._id === action.payload.id)
        const { 
            _id, 
            company, 
            position, 
            jobLocation, 
            jobType, 
            status
        } = job
        return {
            ...state,
            isEditing: true,
            editJobId: _id, 
            company, 
            position, 
            jobLocation, 
            jobType, 
            status
        }
    }
    if(action.type === DELETE_JOB_BEGIN) {
        return {
            ...state,
            isLoading: true,
        }
    }

    if(action.type === EDIT_JOB_BEGIN) {
        return {
            ...state,
            isLoading: true
        }
    }
    if(action.type === EDIT_JOB_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: 'success',
            alertText: 'job updated'
        }
    }
    if(action.type === EDIT_JOB_ERROR) {
        return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: 'danger',
            alertText: action.payload.msg
        }
    }



    throw new Error(`no such action ${action.type}`)
}

export default reducer

