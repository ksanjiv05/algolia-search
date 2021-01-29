import React, { useState, useEffect } from "react";
import algoliasearch from "algoliasearch/lite";
import {ConfluUserConsumer} from '../../context/context';
import config from "../../config";
import {
  InstantSearch,
  SearchBox,
  Hits,
  Highlight,
  Configure
} from "react-instantsearch-dom";
const { algoliaId, algoliaApiKey, algoliaIndexName } = config;

const searchClient = algoliasearch(algoliaId, algoliaApiKey);

const Hit = ({ hit }) => {
  return (
    <ConfluUserConsumer>
    {
      filterUser => {
        console.log(filterUser," and  ",hit.url.split('/wiki/')[0]+'/wiki');
        return (
          filterUser === hit.url.split('/wiki/')[0]+'/wiki' ?
          (  
            <div className="hit">
            <div className="hit-image">
                <a
                  className="margin-set"
                  href={hit.url}
                >
                  <div className='hit-custom-image'>
                    <img className="image" src={hit.image} alt={hit.image} />
                  </div>
                  <div className='hit-custom-name'>
                    <h3><Highlight hit={hit} attribute="name" /></h3>
                  </div>
                </a>
              </div>
            </div>
          )
          :<div></div>
        )
      }
      }
    </ConfluUserConsumer>
  )
};
export default function SearchConfluence() {
  const [isShow, setIsShow] = useState(false);
  const [value, setValue] = useState();

  useEffect(() => {
    setIsShow(value != null ? true : false);
  }, [value]);

  return (
    <div className="search-margin">
      <InstantSearch indexName='conflu_index' searchClient={searchClient}>
      <Configure filters='name:demo' />
        <SearchBox
          className="searchbox-margin"
          autoFocus={false}
          searchAsYouType={true}
          showLoadingIndicator={true}
          onChange={(e) =>
            setValue(e.target.value === "" ? null : e.target.value)
          }
        />
        <main>{isShow && <Hits hitComponent={Hit} />}</main>
      </InstantSearch>
    </div>
  );
}
