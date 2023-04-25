import ComponentWithABunchOfStuff from '../messin/ComponentWithABunchOfStuff.js?island';
// WORKS import ComponentWithABunchOfStuff from '../messin/ComponentWithABunchOfStuff.tsx?island';
import { Island } from '@hubspot/cms-components';

export default function SkipHydrationTester() {
  const someJson = {
    foo: `Candy tootsie roll licorice tootsie roll pudding. candy sesame gummi bears cupcake fruitcake tart bear claw topping croissant donut ice cream lollipop powder tootsie roll tart. candy chocolate cake brownie candy. sugar bear claw chocolate pudding. cupcake gummies bonbon donut chupa chups tart ice cream marshmallow tiramisu. candy canes cupcake lollipop licorice gummies powder jelly-o tootsie roll jelly beans dessert. gingerbread tootsie roll gingerbread jelly-o sweet jelly beans jelly-o cookie. croissant marzipan sugar plum jelly-o marzipan croissant marzipan caramels topping gummi bears. snaps bear claw marshmallow pudding candy muffin.`,
  };

  return (
    <>
      <h2>SkipHydrationTester</h2>
      <p>Big stuff below...</p>
      <Island module={ComponentWithABunchOfStuff} bigJsonStuff={someJson} />
      <p>End</p>
    </>
  );
}
