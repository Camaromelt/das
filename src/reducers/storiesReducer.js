import * as types from '../constants/actionTypes';

const initialState = {
  user: {
    userId: 1,
    userImage: `https://avatars2.githubusercontent.com/u/7544036?s=460&v=4`,
    userName: `Camaromelt`
  },
  storyList: [
	{
		"id": 1,
		"title": "Party only on Sundays",
		"seats": 2,
		"duration": 2,
		"createdAt": "2018-03-29T06:38:30.760Z",
		"complete": false,
		"open": false,
		"type": 1,
		"author": 1
	},
	{
		"id": 2,
		"title": "Run run run",
		"seats": 2,
		"duration": 2,
		"createdAt": "2018-03-29T06:44:16.257Z",
		"complete": false,
		"open": true,
		"type": 0,
		"author": 1
	},
	{
		"id": 3,
		"title": "Adding Test Stuff Now",
		"seats": 2,
		"duration": 2,
		"createdAt": "2018-03-29T06:44:27.821Z",
		"complete": false,
		"open": true,
		"type": 0,
		"author": 1
	},
	{
		"id": 4,
		"title": "Adding Test Stuff Now",
		"seats": 2,
		"duration": 2,
		"createdAt": "2018-03-29T06:44:28.455Z",
		"complete": false,
		"open": true,
		"type": 0,
		"author": 1
	},
	{
		"id": 5,
		"title": "Adding Test Stuff Now",
		"seats": 2,
		"duration": 2,
		"createdAt": "2018-03-29T06:44:28.663Z",
		"complete": false,
		"open": true,
		"type": 0,
		"author": 1
	},
	{
		"id": 6,
		"title": "Adding Test Stuff Now",
		"seats": 2,
		"duration": 2,
		"createdAt": "2018-03-29T06:44:28.804Z",
		"complete": false,
		"open": true,
		"type": 0,
		"author": 1
	},
	{
		"id": 7,
		"title": "Adding Test Stuff Now",
		"seats": 2,
		"duration": 2,
		"createdAt": "2018-03-29T06:44:28.949Z",
		"complete": false,
		"open": true,
		"type": 0,
		"author": 1
	},
	{
		"id": 8,
		"title": "Adding Test Stuff Now",
		"seats": 2,
		"duration": 2,
		"createdAt": "2018-03-29T06:44:29.148Z",
		"complete": false,
		"open": true,
		"type": 0,
		"author": 1
	},
	{
		"id": 9,
		"title": "Adding Test Stuff Now",
		"seats": 2,
		"duration": 2,
		"createdAt": "2018-03-29T06:44:29.290Z",
		"complete": false,
		"open": true,
		"type": 0,
		"author": 1
	},
	{
		"id": 10,
		"title": "Adding Test Stuff Now",
		"seats": 2,
		"duration": 2,
		"createdAt": "2018-03-29T06:44:29.480Z",
		"complete": false,
		"open": true,
		"type": 0,
		"author": 1
	},
	{
		"id": 11,
		"title": "Adding Test Stuff Now",
		"seats": 2,
		"duration": 2,
		"createdAt": "2018-03-29T06:44:29.619Z",
		"complete": false,
		"open": true,
		"type": 0,
		"author": 1
	}
]
};

const storiesReducer = (state = initialState, action) => {
  let storyList;

  switch (action.type) {
    case types.ADD_STORY:
      // Creating a New Story Object
      const newStory = {
        id,
        title,
        seats,
        duration,
        created_at,
        complete,
        open,
        type,
        author
      };
      // push the new story onto a copy of the story list
      storyList = state.storyList.slice();
      storyList.push(newStory);

      // return updated state
      return {
        ...state,
        storyList,
      };

    case types.DELETE_STORY:
      // return {
      //   ...state,
      //   marketList,
      //   totalCards
      // };
    case types.UPDATE_STORY:
      
      // return {
      //   ...state,
      //   marketList,
      //   totalCards 
      // };
    default:
      return state;
  }
};

export default storiesReducer;