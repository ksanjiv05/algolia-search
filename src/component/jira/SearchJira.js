import React, { useState, useEffect } from "react";
//import {JiraUserConsumer} from '../../context/context';
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  SearchBox,
  Hits,
  Highlight,
  Configure
} from "react-instantsearch-dom";
// import config from "../../config";
// const { algoliaId, algoliaApiKey } = config;
//const searchClient = algoliasearch(algoliaId, algoliaApiKey);
const searchClient = algoliasearch('UE79BOFCH0', '39bcba225bacc52c6cc67ff0814fda7a');
const Hit = ({ hit }) => {
  console.log(hit);
  return (
              <div className="hit">
                  <div className="hit-image">
                    <a
                      className="margin-set"
                      href={hit.Project.self}
                    >
                      <div className='hit-custom-image'>
                        <img className="image" src={hit.Project.avatarUrls['48x48']} alt='Issue icon'  />
                      </div>
                      <div className='hit-custom-name'>
                        <h3>( Issue Id : {hit.IssueId} )  <Highlight hit={hit} attribute="Summary" /></h3>
                        
                        {/* <p className='proj'><b> Issue Summary </b> : </p> */}
                        {/* <p className='proj'><b> Issue Description </b> : <Highlight hit={hit} attribute="Description" /></p> */}
                      </div>
                    </a>
                  </div>
                </div>
             )
           
          };



export default function SearchJira(props) {
  const [isShow, setIsShow] = useState(false);
  const [value, setValue] = useState();

  useEffect(() => {
    setIsShow(value != null ? true : false);
  }, [value]);

 console.log(props.userid);
  return (
    <div className="search-margin">
      <InstantSearch indexName='Isses_Name' searchClient={searchClient}  >
      <Configure filters={`userid:${props.userid}`} />
      {/* <Configure filters="objectID:10045" /> */}
        <SearchBox
          className="searchbox-margin"
          autoFocus={false}
          searchAsYouType={true}
          showLoadingIndicator={true}
          onChange={(e) =>
            setValue(e.target.value === "" ? null : e.target.value)
          }
          
        />
        {/* <VoiceSearch searchAsYouSpeak={false} /> */}

        <main>{isShow && <Hits hitComponent={Hit} />}</main>
      </InstantSearch>
    </div>
  );
}
