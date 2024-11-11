import {ProfileMenu} from '../../models';
import {Icons} from '../../constants';

const useProfile = () => {
  const menuItems = [
    new ProfileMenu(9, 'Cart', Icons.CART, 'Cart', Icons.ARROWRIGHT, false),
    new ProfileMenu(
      1,
      'OrderHistory',
      Icons.HISTORY,
      'Order History',
      Icons.ARROWRIGHT,
      false,
    ),
    new ProfileMenu(
      2,
      'Notification',
      Icons.NOTIFICATION,
      'Notifications',
      Icons.ARROWRIGHT,
      false,
    ),
    new ProfileMenu(
      3,
      'Favorite',
      Icons.HEART,
      'Favorite',
      Icons.ARROWRIGHT,
      false,
    ),
    new ProfileMenu(
      4,
      'Appearance',
      Icons.APPEARANCE,
      'Appearance',
      undefined,
      false,
      true,
    ),
    new ProfileMenu(
      5,
      'Language',
      Icons.TRANSLATE,
      'Language',
      Icons.ARROWRIGHT,
      false,
    ),
    new ProfileMenu(
      6,
      'AboutUs',
      Icons.ME,
      'About Us',
      Icons.ARROWRIGHT,
      false,
    ),
    new ProfileMenu(7, 'SignOutModal', undefined, 'Sign Out', undefined, true),
    new ProfileMenu(
      8,
      'DeleteAccountModal',
      undefined,
      'Delete My Account',
      undefined,
      true,
    ),
  ];

  return {menuItems};
};

export default useProfile;
