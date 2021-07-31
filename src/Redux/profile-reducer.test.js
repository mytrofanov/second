import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let State = {
    posts: [
        {id: 1, message: 'First post', count: 5, discount: 0},
        {id: 2, message: 'Second post', count: 7, discount: 1},
        {id: 3, message: 'Third post', count: 8, discount: 10},
            ]
};

test('length of posts should be incremented', () => {
// Test data
    let action = addPostActionCreator ('SuperMax')
// Test action
    let NewState = profileReducer (State, action)
// expectation
    expect(NewState.posts.length).toBe(4)
});

test('new massage of posts should be correct', () => {
// Test data
    let action = addPostActionCreator ('SuperMax')
// Test action
    let NewState = profileReducer (State, action)
// expectation
    expect(NewState.posts[3].message).toBe('SuperMax')
});

test('delete post, length should be decremented', () => {
// Test data
    let action = deletePost(1)
// Test action
    let NewState = profileReducer (State, action)
// expectation
    expect(NewState.posts.length).toBe(2)
});


