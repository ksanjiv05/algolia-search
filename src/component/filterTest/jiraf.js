
import algoliasearch from 'algoliasearch';


// or just use algoliasearch if you are using a <script> tag
// if you are using AMD module loader, algoliasearch will not be defined in window,
// but in the AMD modules of the page

const client = algoliasearch('UE79BOFCH0', '39bcba225bacc52c6cc67ff0814fda7a');
const index = client.initIndex('Isses_Name');

index.search('Issue', {
    filters: 'ProjectName:sanjiv'
  }).then(({ hits }) => {
    console.log(hits);
  });