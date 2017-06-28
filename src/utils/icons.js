import React from 'react';
import PropTypes from 'prop-types';

const icons = {
  warning: <svg viewBox="0 0 16 16"><path d="M8 1.45l6.705 13.363H1.296L8.001 1.45zM8 0c-.345 0-.69.233-.951.698L.22 14.309C-.303 15.239.142 16 1.209 16h13.583c1.067 0 1.512-.761.989-1.691L8.952.698C8.69.233 8.346 0 8.001 0z" /><path d="M9 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM8 11a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0v3a1 1 0 0 1-1 1z" /></svg>,
  addFile: <svg viewBox="0 0 20 20"><path d="M17.854 5.646l-4.5-4.5A.5.5 0 0 0 13 1H3.5C2.673 1 2 1.673 2 2.5v16c0 .827.673 1.5 1.5 1.5h13c.827 0 1.5-.673 1.5-1.5V6a.504.504 0 0 0-.146-.354zM16.793 6H13.5a.5.5 0 0 1-.5-.5V2.207L16.793 6zM16.5 19h-13a.5.5 0 0 1-.5-.5v-16a.5.5 0 0 1 .5-.5H12v3.5c0 .827.673 1.5 1.5 1.5H17v11.5a.5.5 0 0 1-.5.5z"/><path d="M11.5 13H9v-2.5a.5.5 0 0 0-1 0V13H5.5a.5.5 0 0 0 0 1H8v2.5a.5.5 0 0 0 1 0V14h2.5a.5.5 0 0 0 0-1z" /></svg>,  
  cross: <svg viewBox="0 0 16 16"><path d="M15.854 12.854c-0-0-0-0-0-0l-4.854-4.854 4.854-4.854c0-0 0-0 0-0 0.052-0.052 0.090-0.113 0.114-0.178 0.066-0.178 0.028-0.386-0.114-0.529l-2.293-2.293c-0.143-0.143-0.351-0.181-0.529-0.114-0.065 0.024-0.126 0.062-0.178 0.114 0 0-0 0-0 0l-4.854 4.854-4.854-4.854c-0-0-0-0-0-0-0.052-0.052-0.113-0.090-0.178-0.114-0.178-0.066-0.386-0.029-0.529 0.114l-2.293 2.293c-0.143 0.143-0.181 0.351-0.114 0.529 0.024 0.065 0.062 0.126 0.114 0.178 0 0 0 0 0 0l4.854 4.854-4.854 4.854c-0 0-0 0-0 0-0.052 0.052-0.090 0.113-0.114 0.178-0.066 0.178-0.029 0.386 0.114 0.529l2.293 2.293c0.143 0.143 0.351 0.181 0.529 0.114 0.065-0.024 0.126-0.062 0.178-0.114 0-0 0-0 0-0l4.854-4.854 4.854 4.854c0 0 0 0 0 0 0.052 0.052 0.113 0.090 0.178 0.114 0.178 0.066 0.386 0.029 0.529-0.114l2.293-2.293c0.143-0.143 0.181-0.351 0.114-0.529-0.024-0.065-0.062-0.126-0.114-0.178z" /></svg>,
  trash: <svg viewBox="0 0 20 20"><path d="M15.5 2H12v-.5c0-.827-.673-1.5-1.5-1.5h-2C7.673 0 7 .673 7 1.5V2H3.5C2.673 2 2 2.673 2 3.5v1c0 .652.418 1.208 1 1.414V18.5c0 .827.673 1.5 1.5 1.5h10c.827 0 1.5-.673 1.5-1.5V5.914c.582-.206 1-.762 1-1.414v-1c0-.827-.673-1.5-1.5-1.5zM8 1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V2H8v-.5zM14.5 19h-10a.5.5 0 0 1-.5-.5V6h11v12.5a.5.5 0 0 1-.5.5zM16 4.5a.5.5 0 0 1-.5.5h-12a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 .5.5v1z"/><path d="M12.5 7a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 1 0v-10a.5.5 0 0 0-.5-.5zM9.5 7a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 1 0v-10a.5.5 0 0 0-.5-.5zM6.5 7a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 1 0v-10a.5.5 0 0 0-.5-.5z" /></svg>,
};

export default function Icon(props) {
  const { size, className, title, icon } = props;

  return {
    ...icons[icon],
    props: {
      ...icons[icon].props,
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      title,
      className: className ? `icon ${className}` : 'icon',
    },
  };
}

Icon.propTypes = {
  size: PropTypes.number,
  className: PropTypes.string,
  title: PropTypes.string,
};

Icon.defaultProps = {
  size: 16,
};