import { UIManager } from 'react-native';

export default () => {
  UIManager.setLayoutAnimationEnabledExperimental
  && UIManager.setLayoutAnimationEnabledExperimental(true);

  return UIManager;
};
