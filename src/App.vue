<template>
    <main>
        <router-view></router-view>
    </main>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, font, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  button,input,select,option,textarea,i,
  main,header,menu,nav,article,section,aside,footer,video,canvas{
    border: 0;
    background: transparent;
    color: #fff;
    font-family: Helvetica,Arial sans-serif;
    font-size: initial;
    font-style: normal;
    font-weight: normal;
    line-height:inherit;
    list-style: none;
    margin: 0;
    outline: 0;
    padding: 0;
    resize: none;
    text-decoration: none;
    vertical-align: baseline;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    box-shadow: none;
  }
  main,header,nav,article,section,aside,footer,video,canvas,
  button,input,select,option,textarea,i,img,a{
    display: block;
  }
  button,a{
    cursor: pointer;
  }
  img{
    max-width: 100%;
  }
  body,html{
    background: #09213a;
  }

  /* flex布局 */
  .flex_keep_self{
    flex-grow: 0;
    flex-shrink: 0;
  }
  .flex,
  .flex_center,
  .flex_around,
  .flex_between{
    display: -webkit-flex;
    display: flex;
  }
  .flex_center{
    align-items: center;
    justify-content: center;
  }
  .flex_around{
    align-items: center;
    justify-content: space-around;
  }
  .flex_between{
    align-items: center;
    justify-content: space-between;
  }
</style>
