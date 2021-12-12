interface DefaultStateI {

}

const defaultState: DefaultStateI = {

};

const planetReducer = (state: DefaultStateI = defaultState, action: any): DefaultStateI => {
    return state;
};

export default planetReducer;