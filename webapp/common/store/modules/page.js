import { handleActions } from 'redux-actions'

const initialState = {

  navsLeft: [
    {
      title: '首页',
      href: '/',
    },
    {
      title: '游戏',
      href: '/games',
    },
    {
      title: '新闻',
      href: '/news',
    },
    {
      title: '关于',
      href: '/about',
    },
    {
      title: '招聘',
      href: '/jobs',
    },
  ],

  navsRight: [
    {
      title: '登录',
      href: '/login',
    },
    {
      title: '注册',
      href: '/register',
    },
    {
      title: '更多',
      href: '#',
      navs: [
        {
          title: '个人中心',
          href: '//auth.fengyun.cc',
        },
        {
          title: '全部产品',
          href: '/products',
        },
        {
          title: '友情链接',
          href: '/links',
        },
      ],
    },
  ],

}

// ------------------------------------
// Constants
// ------------------------------------
export const GET_PAGE = 'GET_PAGE'

// -----------------------------
// @reducer
// -----------------------------
export default handleActions({
  [GET_PAGE]: state => ({
    ...state,
  }),
}, initialState)
