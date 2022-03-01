import { Asin } from './components/asin';
import { CaseId } from './components/caseId';
import { OrderId } from './components/orderId';
import { Links } from './components/links';

import './App.css';
import { Grid, GridCell, GridRow } from '@rmwc/grid'
import '@rmwc/grid/styles'
import '@rmwc/drawer/styles'
import '@rmwc/list/styles'


function App() {

  return (
    <div className="App">
      <Grid>
        <GridRow>
          <GridCell>
            <Asin />
          </GridCell>
          <GridCell>
            <CaseId />
          </GridCell>
          <GridCell>
            <OrderId />
          </GridCell>
        </GridRow>
        <GridRow>
          <Links />
        </GridRow>
      </Grid>
      </div>
  );
}

export default App;
