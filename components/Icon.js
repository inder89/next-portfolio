import Icons from '@material-ui/core/Icon';
import { any, string, bool } from 'prop-types';
import IconStyled from './styled/IconStyled';

const Icon = ({
 name, style, type, ...restProps 
}) => {
  if (type === 'material') {
    return (
      <IconStyled {...restProps} className="material-icons" style={style}>
        face
      </IconStyled>
    );
  }

  return <IconStyled {...restProps} className={`${name}`} style={style} />;
};

Icon.propTypes = {
  name: string,
  style: any,
  iconType: string,
  restProps: any,
  type: string,
};

export default Icon;
