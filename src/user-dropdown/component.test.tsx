import { setupShallowTestWithStore, setupShallowTest } from '../tests/enzyme-util/shallow';
import { UserDropdown } from './component';
import { EXTENSION_VIEWS, BROADCASTER_CONFIG, LIVE_CONFIG, CONFIGURATIONS  } from '../constants/nav-items';

describe('<UserDropdown />', () => {
  const defaultGenerator = () => ({
    session: { login: 'test', profileImageUrl: 'test.png', authToken: 'test' },
  });
  const setupRenderer = setupShallowTest(UserDropdown, defaultGenerator);

  it('renders correctly', () => {
    const { wrapper } = setupRenderer();
    expect(wrapper).toMatchSnapshot();
  });

  it('does not render if session null', () => {
    const { wrapper } = setupRenderer({
      session: null,
    });
    expect(wrapper).toMatchSnapshot();
  });
});
