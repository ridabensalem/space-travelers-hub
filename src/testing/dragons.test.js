import { Provider } from 'react-redux';
import TestRenderer from 'react-test-renderer';
import Dragons from '../components/dragons'
import Store from '../features/store';

describe('Missions', () => {
  test('Render Dragons Component', () => {
    const tree = TestRenderer.create(
      <Provider store={Store}>
        <Dragons />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
