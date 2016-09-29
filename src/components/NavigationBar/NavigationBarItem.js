import { h } from 'preact';
import classNames from 'classnames';

const NavigationBarItem = (props) => {
  const { full = false, center = false, left = false, right = false,
    half = false, quarter = false, ...rest } = props;
  const cx = classNames({
    full,
    center,
    left,
    half,
    quarter,
    right,
    'topcoat-navigation-bar__item': true,
  });
  return (
    <div className={ cx } { ...rest }>
      { props.children || <span>&nbsp;</span> }
    </div>
  );
};

NavigationBarItem.displayName = 'NavigationBarItem';

export default NavigationBarItem;