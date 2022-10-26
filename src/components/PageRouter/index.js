import { PAGES } from '../../store/reducers/pageReducer';
import { useStore } from '../../store/init';
import { cloneElement } from 'react';

export default function PageRouter({children}) {

  const [ state, ] = useStore();
  console.log(state);
  if (!children.length) {
    children = [children];
  }
  children.forEach(child => {
    PAGES[child.props.address] = child.props.children;
  });


  return cloneElement(PAGES[state.page.address], { name: state.page.localprops.name});
}
