import { Provider } from 'react-redux';
import TestRenderer from 'react-test-renderer';
import Rockets from '../components/Rockets';
import Store from '../features/store';

describe('Missions', () => {
  test('Render Rockets Component', () => {
    const tree = TestRenderer.create(
      <Provider store={Store}>
        <Rockets />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
