import { setupShallowTestWithStore, setupShallowTest } from '../tests/enzyme-util/shallow';
import { RigNav, RigNavComponent } from '.';
import { EXTENSION_VIEWS, BROADCASTER_CONFIG, LIVE_CONFIG, CONFIGURATIONS, PRODUCT_MANAGEMENT  } from '../constants/nav-items';
import { LoginButton } from '../login-button';
import { UserDropdown } from '../user-dropdown';

describe('<RigNavComponent />', () => {
  const defaultGenerator = () => ({
    openConfigurationsHandler: jest.fn(),
    openProductManagementHandler: jest.fn(),
    viewerHandler: jest.fn(),
    configHandler: jest.fn(),
    liveConfigHandler: jest.fn(),
    selectedView: EXTENSION_VIEWS,
    error: '',
  });
  const setupRenderer = setupShallowTest(RigNavComponent, defaultGenerator);
  const setupShallow = setupShallowTestWithStore(RigNav, defaultGenerator);

  it('renders correctly', () => {
    const { wrapper } = setupRenderer();
    expect(wrapper).toMatchSnapshot();
  });

  it('renders an error', () => {
    const { wrapper } = setupRenderer({
      error: 'test error',
    });

    expect(wrapper.find('.top-nav-error').text().trim()).toBe('test error');
  });

  it('correctly handles clicks on each tab', () => {
    const { wrapper } = setupRenderer({
      bitsEnabled: true,
      session: { login: 'test', profileImageUrl: 'test.png', authToken: 'test'},
    });
    wrapper.find('a.top-nav-item').forEach((tab: any) => {
      tab.simulate('click');
    });
    expect(wrapper.instance().props.viewerHandler).toHaveBeenCalled();
    expect(wrapper.instance().props.configHandler).toHaveBeenCalled();
    expect(wrapper.instance().props.liveConfigHandler).toHaveBeenCalled();
    expect(wrapper.instance().props.openConfigurationsHandler).toHaveBeenCalled();
    expect(wrapper.instance().props.openProductManagementHandler).toHaveBeenCalled();
  });

  it('correct css classes are set when things are selected', () => {
    const { wrapper } = setupRenderer({
      selectedView: EXTENSION_VIEWS,
    });
    expect(wrapper.find('.top-nav-item__selected')).toHaveLength(1);

    wrapper.setProps({
      selectedView: BROADCASTER_CONFIG,
    });
    wrapper.update();
    expect(wrapper.find('.top-nav-item__selected')).toHaveLength(1);

    wrapper.setProps({
      selectedView: LIVE_CONFIG,
    });
    wrapper.update();
    expect(wrapper.find('.top-nav-item__selected')).toHaveLength(1);

    wrapper.setProps({
      selectedView: CONFIGURATIONS,
    });
    wrapper.update();
    expect(wrapper.find('.top-nav-item__selected')).toHaveLength(1);
    
    wrapper.setProps({
      selectedView: PRODUCT_MANAGEMENT,
      bitsEnabled: true,
      session: { login: 'test', profileImageUrl: 'test.png', authToken: 'test'},
    });
    wrapper.update();
    expect(wrapper.find('.top-nav-item__selected')).toHaveLength(1);
  });

  it('renders login button if no session', () => {
    const { wrapper } = setupRenderer({
      session: undefined,
    });
    expect(wrapper.find(LoginButton));
  });

  it('renders user dropdown if session exists', () => {
    const { wrapper } = setupRenderer({
      session: { login: 'test', profileImageUrl: 'test.png', authToken: 'test'},
    });
    expect(wrapper.find(UserDropdown));
  });

  it('renders the Product Management tab when extension is bits enabled and the user is logged in', () => {
    const { wrapper } = setupRenderer({
      bitsEnabled: true,
      session: { login: 'test', profileImageUrl: 'test.png', authToken: 'test'},
    });
    expect(wrapper.findWhere(el => el.text() === 'Manage Products').exists()).toBe(true);
  })
});
