import { any, string } from 'prop-types';
import IconStyled from './styled/IconStyled';

const Icon = ({
  name = 'fa fa-map-marker',
  style = {},
  type = 'material',
  ...restProps
}) => {
  if (type === 'material') {
    return (
      <IconStyled
        {...restProps}
        className={name}
        aria-hidden="true"
        style={style}
      />
    );
  }

  return <IconStyled {...restProps} className={`${name}`} style={style} />;
};

Icon.propTypes = {
  name: string,
  style: any,
  type: string,
  restProps: any,
  type: string,
};

export default Icon;
