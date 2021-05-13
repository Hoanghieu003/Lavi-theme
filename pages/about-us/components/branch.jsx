import React, { Component, useState } from 'react'
import { GoogleMap, InfoWindow, Marker, useLoadScript } from "@react-google-maps/api";
import Link from 'next/link'

export default function Branch({branches = []}){
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyBTRwW2ik4LhX0gxOGLmRYMuSuGh3ZRE9U" // Add your API key
      });
    const [activeMarker, setActiveMarker] = useState(null);
    const handleActiveMarker = (marker) => {
        if (marker === activeMarker) {
          return;
        }
        setActiveMarker(marker);
      };
    const handleOnLoad = (map) => {
        const bounds = new window.google.maps.LatLngBounds();
        branches.forEach(({ position }) => bounds.extend(position));
        map.fitBounds(bounds);
    };
        return ( isLoaded ? (
            <div className="section-full content-inner bg-grey">
                <div className="container">
                  <div className="section-head text-center">
                    <span className="main-title text-primary">Our branches</span>
                    <h3 className="title">Our branches</h3>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="menu-box">
                        <ul className="menu-list">
                          {branches.map((item) => renderItem(item))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <GoogleMap
                        onLoad={handleOnLoad}
                        onClick={() => setActiveMarker(null)}
                        mapContainerStyle={{ width: "100%", height: "50vh" }}
                  >
                        {branches.map((item, activeMarker) => renderMarker(item, activeMarker))}
                  </GoogleMap>
                </div>
            </div>
         ) : <></>

        )
    }
    const renderItem = (item) => {
      return(
        <li key={item.id}>
          <div className="item-left">
            <Link href={`/about-us/branch/${item.id}`}>
              <a>
                <h4 className="title">{item.city}</h4>
              </a>
            </Link>
          </div>
          <Link href={`/about-us/branch/${item.id}`}>
            <div className="item-right">
              <h5 className="price">{item.address}</h5>
            </div>
          </Link>
          <Link href={`/about-us/branch/${item.id}`}>
            <a>
              <i className="fa fa-angle-double-right" style={{fontSize: 30, paddingLeft: 20}}></i>
            </a>
          </Link>
        </li>
      )
    }
    const renderMarker = (item, activeMarker) => {
      return(
          <Marker
              key={item.id}
              position={item.position}
              onClick={() => handleActiveMarker(item.id)}
          >
              {activeMarker === item.id ? (
              <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                  <div>
                    <div>{address}</div>
                    <Link href={`/about-us/branch/${item.id}`}>
                      <a>
                        <div>More Details</div>
                      </a>
                    </Link>
                  </div>
              </InfoWindow>
              ) : null}
          </Marker>
      )
    }