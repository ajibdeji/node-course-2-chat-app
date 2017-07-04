import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'button': {
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'color': '#fff',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
  },
  'button:hover': {
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'color': '#fff',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
  },
  'chat__messages': {
    'listStyleType': 'none'
  },
  'chat__sidebar ul': {
    'listStyleType': 'none'
  },
  '*': {
    'boxSizing': 'border-box',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontFamily': 'HelveticaNeue-Light, "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif',
    'fontWeight': '300',
    'fontSize': [{ 'unit': 'rem', 'value': 0.95 }],
    '<w600': {
      'fontSize': [{ 'unit': 'rem', 'value': 1 }]
    }
  },
  'li': {
    'listStylePosition': 'inside'
  },
  'ul': {
    'listStylePosition': 'inside'
  },
  'h3': {
    'fontWeight': '600',
    'textAlign': 'center',
    'fontSize': [{ 'unit': 'rem', 'value': 1.5 }]
  },
  'button': {
    'background': '#265f82',
    'cursor': 'pointer',
    'transition': 'background .3s ease'
  },
  'button:hover': {
    'background': '#1F4C69'
  },
  'button:disabled': {
    'cursor': 'default',
    'background': '#698ea5'
  },
  'centered-form': {
    'display': 'flex',
    'alignItems': 'center',
    'height': [{ 'unit': 'vh', 'value': 100 }],
    'width': [{ 'unit': 'vw', 'value': 100 }],
    'justifyContent': 'center',
    'background': '-moz-linear-gradient(125deg, rgba(39, 107, 130, 1) 0, rgba(49, 84, 129, 1) 100%)',
    'background': '-webkit-gradient(linear, left top, right bottom, color-stop(0, rgba(49, 84, 129, 1)), color-stop(100%, rgba(39, 107, 130, 1)))',
    'background': '-webkit-linear-gradient(125deg, rgba(39, 107, 130, 1) 0, rgba(49, 84, 129, 1) 100%)',
    'background': '-o-linear-gradient(125deg, rgba(39, 107, 130, 1) 0, rgba(49, 84, 129, 1) 100%)',
    'background': '-ms-linear-gradient(125deg, rgba(39, 107, 130, 1) 0, rgba(49, 84, 129, 1) 100%)',
    'background': 'linear-gradient(325deg, rgba(39, 107, 130, 1) 0, rgba(49, 84, 129, 1) 100%)'
  },
  'centered-form__form': {
    'background': 'rgba(250, 250, 250, .9)',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e1e1e1' }],
    'borderRadius': '5px',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }],
    'margin': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'width': [{ 'unit': 'px', 'value': 230 }]
  },
  'form-field': {
    'margin': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }]
  },
  'form-field>*': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'form-field label': {
    'display': 'block',
    'marginBottom': [{ 'unit': 'px', 'value': 7 }]
  },
  'form-field input': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e1e1e1' }],
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
  },
  'form-field select': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e1e1e1' }],
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
  },
  'chat': {
    'display': 'flex'
  },
  'chat__sidebar': {
    'overflowY': 'scroll',
    'width': [{ 'unit': 'px', 'value': 260 }],
    'height': [{ 'unit': 'vh', 'value': 100 }],
    'background': '-moz-linear-gradient(125deg, rgba(39, 107, 130, 1) 0, rgba(49, 84, 129, 1) 100%)',
    'background': '-webkit-gradient(linear, left top, right bottom, color-stop(0, rgba(49, 84, 129, 1)), color-stop(100%, rgba(39, 107, 130, 1)))',
    'background': '-webkit-linear-gradient(125deg, rgba(39, 107, 130, 1) 0, rgba(49, 84, 129, 1) 100%)',
    'background': '-o-linear-gradient(125deg, rgba(39, 107, 130, 1) 0, rgba(49, 84, 129, 1) 100%)',
    'background': '-ms-linear-gradient(125deg, rgba(39, 107, 130, 1) 0, rgba(49, 84, 129, 1) 100%)',
    'background': 'linear-gradient(325deg, rgba(39, 107, 130, 1) 0, rgba(49, 84, 129, 1) 100%)'
  },
  'chat__footer': {
    'background': '#e6eaee',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
  },
  'chat__sidebar li': {
    'background': '#e6eaee',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
  },
  'chat__sidebar h3': {
    'color': '#e6eaee',
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 20 }],
    'textAlign': 'left'
  },
  'chat__sidebar li': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e1e1e1' }],
    'borderRadius': '5px',
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
  },
  'chat__main': {
    'display': 'flex',
    'flexDirection': 'column',
    'height': [{ 'unit': 'vh', 'value': 100 }],
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'chat__messages': {
    'flexGrow': '1',
    'overflowY': 'scroll',
    'WebkitOverflowScrolling': 'touch',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
  },
  'chat__footer': {
    'display': 'flex',
    'flexShrink': '0'
  },
  'chat__footer form': {
    'flexGrow': '1',
    'display': 'flex'
  },
  'chat__footer form *': {
    'marginRight': [{ 'unit': 'px', 'value': 10 }]
  },
  'chat__footer input': {
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'flexGrow': '1'
  },
  'message': {
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
  },
  'message__title': {
    'display': 'flex',
    'marginBottom': [{ 'unit': 'px', 'value': 5 }]
  },
  'message__title h4': {
    'fontWeight': '600',
    'marginRight': [{ 'unit': 'px', 'value': 10 }]
  },
  'message__title span': {
    'color': '#999'
  }
});
