(this["webpackJsonpreact-kabzda-1"]=this["webpackJsonpreact-kabzda-1"]||[]).push([[0],{10:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return c}));var r=n(58),a=r.create({withCredentials:!0,headers:{"API-KEY":"d0f249f5-23ff-48d0-b8e9-a154edff15d4"},baseURL:"https://social-network.samuraijs.com/api/1.0/"}),s={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},getFriends:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return a.get("users?page=".concat(e,"&count=").concat(t,"&friend=").concat(n))},unFollow:function(e){return a.delete("follow/".concat(e))},follow:function(e){return a.post("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method.Please use profileApi"),i.getProfile(e)}},i={getProfile:function(e){return a.get("profile/"+e)},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status",{status:e})}},c={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}}},11:function(e,t,n){e.exports={nav:"Navbar_nav__1FSrB",item:"Navbar_item__1rl86",activeLink:"Navbar_activeLink__ts9gE"}},20:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__1Djbj",dialogsItem:"Dialogs_dialogsItem__3DzM3",active:"Dialogs_active__32bNv",dialog:"Dialogs_dialog__237Y_",messages:"Dialogs_messages__2Cs9I",message:"Dialogs_message__CWbLQ",ava:"Dialogs_ava__28zLj",block:"Dialogs_block__3qSSS"}},25:function(e,t,n){"use strict";n(0);var r=n.p+"static/media/Spin-1s-200px.424ecdff.svg",a=n(36),s=n.n(a),i=n(1);t.a=function(e){return Object(i.jsx)("div",{className:s.a.loaderBlock,children:Object(i.jsx)("div",{className:s.a.loader,children:Object(i.jsx)("img",{className:s.a.img,src:r})})})}},28:function(e,t,n){e.exports={friendsBlock:"friends_friendsBlock__2DjA8",friend:"friends_friend__3GccG",friends:"friends_friends__2r2YN",usersPhoto:"friends_usersPhoto__1SsCU",startAndEnd:"friends_startAndEnd__2nGg8"}},29:function(e,t,n){e.exports={loginPage:"login_loginPage__3a48g",loginBlock:"login_loginBlock__U9-iG",loginForm:"login_loginForm__29O8y",form:"login_form__19Jav",error:"login_error__110zK",testAccount:"login_testAccount__10JZu"}},30:function(e,t,n){"use strict";n.d(t,"e",(function(){return x})),n.d(t,"d",(function(){return A})),n.d(t,"c",(function(){return w})),n.d(t,"b",(function(){return F})),n.d(t,"f",(function(){return S}));var r=n(3),a=n.n(r),s=n(5),i=n(7),c=n(2),o=n(10),u=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(c.a)(Object(c.a)({},e),r):e}))},d="FOLLOW",l="UNFOLLOW",f="SET_USERS",j="SET_CURRENT_PAGE",b="SET_TOTAL_USERS_COUNT",g="TOGGLE_IS_FETCHING",h="TOGGLE_IS_FOLLOWING_PROGRESS",p={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},v=function(e){return{type:d,userId:e}},O=function(e){return{type:l,userId:e}},m=function(e){return{type:j,currentPage:e}},x=function(e){return{type:g,isFetching:e}},A=function(e,t){return{type:h,isFetching:e,userId:t}},w=function(e,t){return function(){var n=Object(s.a)(a.a.mark((function n(r){var s;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(x(!0)),r(m(e)),n.next=4,o.c.getUsers(e,t);case 4:s=n.sent,r(x(!1)),r((i=s.items,{type:f,users:i})),r((a=s.totalCount,{type:b,count:a})),r(m(e));case 9:case"end":return n.stop()}var a,i}),n)})));return function(e){return n.apply(this,arguments)}}()},P=function(){var e=Object(s.a)(a.a.mark((function e(t,n,r,s){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(A(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(s(n)),t(A(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),F=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:P(n,e,o.c.follow.bind(o.c),v);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},S=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:P(n,e,o.c.unFollow.bind(o.c),O);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(c.a)(Object(c.a)({},e),{},{users:u(e.users,t.userId,"id",{followed:!0})});case l:return Object(c.a)(Object(c.a)({},e),{},{users:u(e.users,t.userId,"id",{followed:!1})});case f:return Object(c.a)(Object(c.a)({},e),{},{users:t.users});case j:return Object(c.a)(Object(c.a)({},e),{},{currentPage:t.currentPage});case b:return Object(c.a)(Object(c.a)({},e),{},{totalUsersCount:t.count});case g:return Object(c.a)(Object(c.a)({},e),{},{isFetching:t.isFetching});case h:return Object(c.a)(Object(c.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(i.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}}},34:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(2),a=n(17),s=n(18),i=n(22),c=n(21),o=n(0),u=n.n(o),d=n(6),l=n(13),f=n(1),j=function(e){return{isAuth:e.auth.isAuth}},b=function(e){var t=function(t){Object(i.a)(o,t);var n=Object(c.a)(o);function o(){return Object(a.a)(this,o),n.apply(this,arguments)}return Object(s.a)(o,[{key:"render",value:function(){return this.props.isAuth?Object(f.jsx)(e,Object(r.a)({},this.props)):Object(f.jsx)(d.a,{to:"/login"})}}]),o}(u.a.Component);return Object(l.b)(j)(t)}},36:function(e,t,n){e.exports={loader:"Preloader_loader__1zNIO",loaderBlock:"Preloader_loaderBlock__3jIUY",img:"Preloader_img__AVukO"}},37:function(e,t,n){e.exports={header:"Header_header__2jco9",loginBlock:"Header_loginBlock__5hlhJ",logo:"Header_logo__2ezO8"}},40:function(e,t,n){e.exports={Sidebar:"Sidebar_Sidebar__1CPdP",friends:"Sidebar_friends__2lPWL"}},44:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"d",(function(){return h})),n.d(t,"c",(function(){return p})),n.d(t,"e",(function(){return v}));var r=n(3),a=n.n(r),s=n(5),i=n(7),c=n(2),o=n(10),u="ADD-POST",d="DELETE_POST",l="SET_USER_PROFILE",f="SET_STATUS",j={posts:[{id:1,message:"First post",count:5,discount:0},{id:2,message:"Second post",count:7,discount:1},{id:3,message:"Third post",count:8,discount:10},{id:4,message:"Forth post",count:9,discount:4},{id:5,message:"Fifth post",count:10,discount:2},{id:6,message:"Six post",count:11,discount:3},{id:7,message:"Seven post",count:14,discount:4},{id:8,message:"Eight post",count:15,discount:2},{id:9,message:"Nine post",count:7,discount:2}],profile:null,status:""},b=function(e){return{type:u,newPost:e}},g=function(e){return{type:f,status:e}},h=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.getProfile(e);case 2:r=t.sent,n((a=r.data,{type:l,profile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getStatus(e);case 2:r=t.sent,n(g(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(g(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var n={id:10,message:t.newPost,count:0,discount:0};return Object(c.a)(Object(c.a)({},e),{},{posts:[].concat(Object(i.a)(e.posts),[n])});case d:return Object(c.a)(Object(c.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=t.id}))});case l:return Object(c.a)(Object(c.a)({},e),{},{profile:t.profile});case f:return Object(c.a)(Object(c.a)({},e),{},{status:t.status});default:return e}}},45:function(e,t,n){"use strict";t.a=n.p+"static/media/user.96e310a6.png"},59:function(e,t,n){e.exports={newsBlock:"News_newsBlock__ShQ5k"}},60:function(e,t,n){e.exports={blockMusic:"Music_blockMusic__2Xd5Z"}},61:function(e,t,n){e.exports={settings:"Settings_settings__3ZQJn"}},67:function(e,t,n){},68:function(e,t,n){},98:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(33),i=n.n(s),c=(n(67),n(17)),o=n(18),u=n(22),d=n(21),l=(n(68),n(11)),f=n.n(l),j=n(8),b=n(40),g=n.n(b),h=n(28),p=n.n(h),v=n(45),O=n(1),m=function(e){var t=e.friend;e.followingInProgress,e.unfollow,e.follow;return Object(O.jsx)("div",{children:t=Object(O.jsxs)("div",{className:p.a.friend,children:[Object(O.jsx)(j.b,{to:"/profile/"+t.id,children:Object(O.jsx)("img",{src:null!=t.photos.small?t.photos.small:v.a,className:p.a.usersPhoto})}),Object(O.jsx)("div",{children:t.name}),Object(O.jsx)("div",{children:t.status})]})})},x=function(e){var t=e.currentFriendsPage,n=e.onFriendsPageChanged,r=e.friendsPageSize,a=e.totalFriendsCount,s=e.friends;return console.log(t,n,r,a),Object(O.jsxs)("div",{className:p.a.friendsBlock,children:[s.slice(0,3).map((function(e){return Object(O.jsx)(m,{friend:e})})),Object(O.jsxs)("div",{className:p.a.friends,children:[Object(O.jsx)("div",{children:"\u0412\u0441\u0435\u0433\u043e \u0434\u0440\u0443\u0437\u0435\u0439:"}),Object(O.jsx)("div",{children:a})]})]})},A=function(e){var t=e.totalFriendsCount,n=e.friendsPageSize,r=e.currentFriendsPage,a=e.onFriendsPageChanged,s=e.friends;return Object(O.jsxs)("div",{className:g.a.Sidebar,children:[Object(O.jsx)("div",{className:g.a.friends,children:" \u041c\u043e\u0438 \u0434\u0440\u0443\u0437\u044c\u044f:"}),Object(O.jsx)(x,{totalFriendsCount:t,friendsPageSize:n,currentFriendsPage:r,onFriendsPageChanged:a,friends:s})]})},w=n(25),P=function(e){return e.sidebar.friends},F=function(e){return e.sidebar.friendsPageSize},S=function(e){return e.sidebar.currentFriendsPage},E=function(e){return e.sidebar.totalFriendsCount},N=n(14),B=n(13),k=n(3),y=n.n(k),C=n(5),_=n(2),R=n(10),L=n(30),U="SET_FRIENDS",T="SET_CURRENT_FRIENDS_PAGE",X="SET_TOTAL_FRIENDS_COUNT",D={friends:[],friendsPageSize:3,totalFriendsCount:0,currentFriendsPage:1},z=function(e){return{type:U,newFriends:e}},Q=function(e){return{type:T,currentFriendsPage:e}},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U:return Object(_.a)(Object(_.a)({},e),{},{friends:t.newFriends});case T:return Object(_.a)(Object(_.a)({},e),{},{currentFriendsPage:t.currentFriendsPage});case X:return Object(_.a)(Object(_.a)({},e),{},{totalFriendsCount:t.totalFriendsCount});default:return e}return e},J=n(34),W=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).onFriendsPageChanged=function(t){var n=e.props.friendsPageSize;e.props.getFriends(t,n)},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentFriendsPage,n=e.friendsPageSize,r=e.friend;this.props.getFriends(t,n,r)}},{key:"render",value:function(){return Object(O.jsxs)(O.Fragment,{children:[this.props.isFetching?Object(O.jsx)(w.a,{}):null,Object(O.jsx)(A,{totalFriendsCount:this.props.totalFriendsCount,friendsPageSize:this.props.friendsPageSize,currentFriendsPage:this.props.currentFriendsPage,onFriendsPageChanged:this.onFriendsPageChanged,friends:this.props.friends})]})}}]),n}(a.a.Component),M=Object(N.d)(Object(B.b)((function(e){return{friends:P(e),totalFriendsCount:E(e),friendsPageSize:F(e),currentFriendsPage:S(e)}}),{getFriends:function(e,t,n){return function(){var r=Object(C.a)(y.a.mark((function r(a){var s,i;return y.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a(Object(L.e)(!0)),a(Q(e)),r.next=4,R.c.getFriends(e,t,n);case 4:s=r.sent,i=s.data.items,a(Object(L.e)(!1)),a(z(i)),a((c=s.data.totalCount,{type:X,totalFriendsCount:c})),a(Q(e));case 10:case"end":return r.stop()}var c}),r)})));return function(e){return r.apply(this,arguments)}}()}}),J.a)(W),I=function(){return Object(O.jsxs)("nav",{className:f.a.nav,children:[Object(O.jsx)("div",{className:f.a.item,children:Object(O.jsx)(j.b,{to:"/Profile",activeClassName:f.a.activeLink,children:"Profile"})}),Object(O.jsx)("div",{className:f.a.item,children:Object(O.jsx)(j.b,{to:"/Dialogs",activeClassName:f.a.activeLink,children:"Messages"})}),Object(O.jsx)("div",{className:f.a.item,children:Object(O.jsx)(j.b,{to:"/Users",activeClassName:f.a.activeLink,children:"Users"})}),Object(O.jsx)("div",{className:f.a.item,children:Object(O.jsx)(j.b,{to:"/News",activeClassName:f.a.activeLink,children:"News"})}),Object(O.jsx)("div",{className:f.a.item,children:Object(O.jsx)(j.b,{to:"/Music",activeClassName:f.a.activeLink,children:"Music"})}),Object(O.jsx)("div",{className:f.a.item,children:Object(O.jsx)(j.b,{to:"/Settings",activeClassName:f.a.activeLink,children:"Settings"})}),Object(O.jsx)("div",{className:f.a.item,children:Object(O.jsx)(j.b,{to:"/login",activeClassName:f.a.activeLink,children:"Login"})}),Object(O.jsx)(M,{})]})},q=n(59),G=n.n(q),K=function(){return Object(O.jsx)("div",{className:G.a.newsBlock,children:"News"})},Z=n(60),V=n.n(Z),Y=function(e){return Object(O.jsx)("div",{className:V.a.blockMusic,children:"Music"})},$=n(61),ee=n.n($),te=function(){return Object(O.jsx)("div",{className:ee.a.settings,children:"Settings"})},ne=n(6),re=n(7),ae="SEND_MESSAGE",se={dialogs:[{id:1,name:"Sasha",ava:"https://klike.net/uploads/posts/2019-03/1551511784_4.jpg"},{id:2,name:"Kolya",ava:"https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"},{id:3,name:"Petya",ava:"https://www.meme-arsenal.com/memes/cbfd4797382778baf1f41b8439399262.jpg"},{id:4,name:"Vasya",ava:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnIZ65bUZfqwc204EF5GN3tpbfY5zQ2WiB1A&usqp=CAU"},{id:5,name:"Nino",ava:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbMxEyi1yeivrdaCitJxEftqshPFPEouuz2A&usqp=CAU"},{id:6,name:"Dina",ava:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa8SCQKFAMJ8BW_2FXCdUyTXm66A4eksY2iA&usqp=CAU"},{id:7,name:"Pablo",ava:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYNPFMEDOAjlZxz1E1bSrNI-PlOq2m1tRh0g&usqp=CAU"}],messages:[{id:1,message:"Hi!"},{id:2,message:"How are you doing?"},{id:3,message:"Whats up?"},{id:4,message:"Yo"},{id:5,message:"Yo"}]},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ae:var n=t.newMessageBody;return Object(_.a)(Object(_.a)({},e),{},{messages:[].concat(Object(re.a)(e.messages),[{id:6,message:n}])});default:return e}},ce=n(20),oe=n.n(ce),ue=n(35),de=function(e){var t="/dialogs/"+e.id;return Object(O.jsxs)("div",{className:oe.a.dialog+" "+oe.a.active,children:[Object(O.jsx)("img",{className:oe.a.ava,src:e.avatar}),'"',Object(O.jsxs)(j.b,{to:t,children:[" ",e.name]})]})},le=function(e){return Object(O.jsx)("div",{className:oe.a.message,children:e.message})},fe=function(e){var t=e.dialogsPage,n=t.dialogs.map((function(e){return Object(O.jsx)(de,{name:e.name,id:e.id,avatar:e.ava},e.id)})),r=t.messages.map((function(e){return Object(O.jsx)(le,{message:e.message},e.id)}));return Object(O.jsxs)("div",{className:oe.a.dialogs,children:[Object(O.jsx)("div",{className:oe.a.block}),Object(O.jsx)("div",{className:oe.a.dialogsItem,children:n}),Object(O.jsxs)("div",{className:oe.a.messages,children:["  ",Object(O.jsxs)("div",{children:[r," "]}),Object(O.jsxs)("div",{children:[" ",Object(O.jsx)(je,{onSubmit:function(t){console.log(t.newMessageBody),e.sendMessage(t.newMessageBody)}})]})]})]})},je=function(e){var t,n,r=Object(ue.a)(),a=r.register,s=r.handleSubmit,i=r.formState.errors;return Object(O.jsxs)("form",{onSubmit:s((function(t){return e.onSubmit(t)})),children:[Object(O.jsx)("input",Object(_.a)(Object(_.a)({},a("newMessageBody",{required:!0,maxLength:30})),{},{placeholder:"enter your message"})),Object(O.jsx)("input",{type:"Submit",value:"Send Message"}),"required"===(null===i||void 0===i||null===(t=i.newMessageBody)||void 0===t?void 0:t.type)&&Object(O.jsx)("span",{children:"This field is required"}),"maxLength"===(null===i||void 0===i||null===(n=i.newMessageBody)||void 0===n?void 0:n.type)&&Object(O.jsx)("span",{children:"This field cannot exceed 30 characters"})]})},be=Object(N.d)(Object(B.b)((function(e){return{dialogsPage:e.messagesPage}}),(function(e){return{sendMessage:function(t){e(function(e){return{type:ae,newMessageBody:e}}(t))}}})),J.a)(fe),ge=n(37),he=n.n(ge),pe=function(e){return Object(O.jsxs)("header",{className:he.a.header,children:[Object(O.jsx)("img",{src:"data:image/jpeg;base64,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",className:he.a.logo,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f"}),Object(O.jsx)("div",{className:he.a.loginBlock,children:e.isAuth?Object(O.jsxs)("div",{children:[e.login,Object(O.jsx)("div",{children:Object(O.jsx)("button",{onClick:e.logoutReducer,children:"Log out"})})]}):Object(O.jsx)(j.b,{to:"/login",children:" Login "})})]})},ve="samurai-network/auth/SET_USER_DATA",Oe="SET_AUTH_ERROR",me={userId:null,email:null,login:null,isAuth:!1,authError:null},xe=function(e,t,n,r){return{type:ve,payload:{userId:e,email:t,login:n,isAuth:r}}},Ae=function(e){return{type:Oe,errorMessage:e}},we=function(){return function(){var e=Object(C.a)(y.a.mark((function e(t){var n,r,a,s,i;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,s=r.login,i=r.email,t(xe(a,i,s,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ve:return Object(_.a)(Object(_.a)({},e),t.payload);default:return e;case Oe:return Object(_.a)(Object(_.a)({},e),{},{authError:t.errorMessage})}},Fe=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsx)(pe,Object(_.a)({},this.props))}}]),n}(a.a.Component),Se=Object(B.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logoutReducer:function(){return function(){var e=Object(C.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.logout();case 2:0===e.sent.data.resultCode&&t(xe(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Fe),Ee=n(55),Ne=n(29),Be=n.n(Ne),ke=["onChange"],ye=function(e){var t,n,r,a,s=e.onSubmit,i=Object(ue.a)(),c=(i.setError,i.register),o=i.handleSubmit,u=i.formState.errors,d=c("loginError");d.onChange,Object(Ee.a)(d,ke);return Object(O.jsxs)("div",{className:Be.a.loginPage,children:[Object(O.jsxs)("form",{className:Be.a.form,onSubmit:o(s),children:[Object(O.jsx)("h1",{children:"Login Form"}),Object(O.jsxs)("div",{children:[Object(O.jsx)("input",Object(_.a)(Object(_.a)({},c("email",{required:!0,maxLength:40})),{},{placeholder:" e-mail"})),"required"===(null===u||void 0===u||null===(t=u.email)||void 0===t?void 0:t.type)&&Object(O.jsx)("span",{children:"This field is required"}),"maxLength"===(null===u||void 0===u||null===(n=u.email)||void 0===n?void 0:n.type)&&Object(O.jsx)("span",{children:"This field cannot exceed 40 characters"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("input",Object(_.a)(Object(_.a)({},c("password",{required:!0,maxLength:30})),{},{placeholder:" password",type:"password"})),"required"===(null===u||void 0===u||null===(r=u.password)||void 0===r?void 0:r.type)&&Object(O.jsx)("span",{children:"This field is required"}),"maxLength"===(null===u||void 0===u||null===(a=u.password)||void 0===a?void 0:a.type)&&Object(O.jsx)("span",{children:"This field cannot exceed 30 characters"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("input",Object(_.a)(Object(_.a)({},c("rememberMe")),{},{type:"checkbox"})),"Remember me"]}),Object(O.jsx)("input",{type:"submit",value:"Login"})]}),Object(O.jsxs)("div",{className:Be.a.testAccount,children:[Object(O.jsx)("h1",{children:" Test account: "}),Object(O.jsx)("div",{children:"Email: free@samuraijs.com"}),Object(O.jsx)("div",{children:"Password: free"})]})]})},Ce=Object(B.b)((function(e){return{isAuth:e.auth.isAuth,authError:e.auth.authError}}),{loginReducer:function(e,t,n){return function(){var r=Object(C.a)(y.a.mark((function r(a){var s,i;return y.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,R.a.login(e,t,n);case 2:0===(s=r.sent).data.resultCode?a(we()):(i=s.data.messages.length>0?s.data.messages[0]:"\u043e\u0448\u0438\u0431\u043a\u0430 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438",a(Ae(i)));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){var t=e.isAuth,n=e.loginReducer,r=e.authError;return t?Object(O.jsx)(ne.a,{to:"/profile"}):Object(O.jsxs)("div",{className:Be.a.loginBlock,children:[Object(O.jsx)(ye,{onSubmit:function(e){return n(e.email,e.password,e.rememberMe)}}),Object(O.jsx)("div",{className:Be.a.error,children:r})]})})),_e="SET_INITIALIZED",Re={initialized:!1},Le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _e:return Object(_.a)(Object(_.a)({},e),{},{initialized:!0});default:return e}},Ue=n(44),Te=n(62),Xe=Object(N.c)({profilePage:Ue.b,messagesPage:ie,sidebar:H,usersPage:L.a,auth:Pe,app:Le}),De=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||N.d,ze=Object(N.e)(Xe,De(Object(N.a)(Te.a)));window.__store__=ze;var Qe=ze,He=a.a.lazy((function(){return n.e(4).then(n.bind(null,105))})),Je=a.a.lazy((function(){return n.e(3).then(n.bind(null,104))})),We=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(O.jsxs)("div",{className:"app-wrapper",children:[Object(O.jsx)(Se,{}),Object(O.jsx)(I,{}),Object(O.jsx)(a.a.Suspense,{fallback:Object(O.jsx)(w.a,{}),children:Object(O.jsxs)("div",{className:"app-wrapper-content",children:[Object(O.jsx)(ne.b,{path:"/dialogs",render:function(){return Object(O.jsx)(be,{})}}),Object(O.jsx)(ne.b,{path:"/profile/:userId?",render:function(){return Object(O.jsx)(Je,{})}}),Object(O.jsx)(ne.b,{path:"/news",render:function(){return Object(O.jsx)(K,{})}}),Object(O.jsx)(ne.b,{path:"/music",render:function(){return Object(O.jsx)(Y,{})}}),Object(O.jsx)(ne.b,{path:"/settings",render:function(){return Object(O.jsx)(te,{})}}),Object(O.jsx)(ne.b,{path:"/users",render:function(){return Object(O.jsx)(He,{})}}),Object(O.jsx)(ne.b,{path:"/friends",render:function(){return Object(O.jsx)(M,{})}}),Object(O.jsx)(ne.b,{path:"/login",render:function(){return Object(O.jsx)(Ce,{})}})]})})]}):Object(O.jsx)(w.a,{})}}]),n}(a.a.Component),Me=Object(N.d)(ne.f,Object(B.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){e(we()).then((function(){e({type:_e})}))}}}))(We),Ie=function(e){return Object(O.jsx)(j.a,{children:Object(O.jsx)(B.a,{store:Qe,children:Object(O.jsx)(Me,{})})})};i.a.render(Object(O.jsx)(Ie,{}),document.getElementById("root"))}},[[98,1,2]]]);
//# sourceMappingURL=main.5104a14a.chunk.js.map