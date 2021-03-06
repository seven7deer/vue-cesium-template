/**
 * Cesium - https://github.com/CesiumGS/cesium
 *
 * Copyright 2011-2020 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/master/LICENSE.md for full licensing details.
 */
define(["./when-a55a8a4c","./Check-bc1d37d9","./Math-d7cbfcf6","./Cartesian2-6ec3db89","./Transforms-a4d7073e","./RuntimeError-7c184ac0","./WebGLConstants-4c11ee5f","./ComponentDatatype-919a7463","./GeometryAttribute-291ff23b","./GeometryAttributes-1c7ce91d","./IndexDatatype-4351ba4c","./GeometryOffsetAttribute-c9accdb9","./EllipseGeometryLibrary-62835faa","./EllipseOutlineGeometry-f4812f30"],function(l,r,e,n,i,t,s,a,o,c,u,d,m,p){"use strict";function y(e){var i=(e=l.defaultValue(e,l.defaultValue.EMPTY_OBJECT)).radius;r.Check.typeOf.number("radius",i);var t={center:e.center,semiMajorAxis:i,semiMinorAxis:i,ellipsoid:e.ellipsoid,height:e.height,extrudedHeight:e.extrudedHeight,granularity:e.granularity,numberOfVerticalLines:e.numberOfVerticalLines};this._ellipseGeometry=new p.EllipseOutlineGeometry(t),this._workerName="createCircleOutlineGeometry"}y.packedLength=p.EllipseOutlineGeometry.packedLength,y.pack=function(e,i,t){return r.Check.typeOf.object("value",e),p.EllipseOutlineGeometry.pack(e._ellipseGeometry,i,t)};var f=new p.EllipseOutlineGeometry({center:new n.Cartesian3,semiMajorAxis:1,semiMinorAxis:1}),G={center:new n.Cartesian3,radius:void 0,ellipsoid:n.Ellipsoid.clone(n.Ellipsoid.UNIT_SPHERE),height:void 0,extrudedHeight:void 0,granularity:void 0,numberOfVerticalLines:void 0,semiMajorAxis:void 0,semiMinorAxis:void 0};return y.unpack=function(e,i,t){var r=p.EllipseOutlineGeometry.unpack(e,i,f);return G.center=n.Cartesian3.clone(r._center,G.center),G.ellipsoid=n.Ellipsoid.clone(r._ellipsoid,G.ellipsoid),G.height=r._height,G.extrudedHeight=r._extrudedHeight,G.granularity=r._granularity,G.numberOfVerticalLines=r._numberOfVerticalLines,l.defined(t)?(G.semiMajorAxis=r._semiMajorAxis,G.semiMinorAxis=r._semiMinorAxis,t._ellipseGeometry=new p.EllipseOutlineGeometry(G),t):(G.radius=r._semiMajorAxis,new y(G))},y.createGeometry=function(e){return p.EllipseOutlineGeometry.createGeometry(e._ellipseGeometry)},function(e,i){return l.defined(i)&&(e=y.unpack(e,i)),e._ellipseGeometry._center=n.Cartesian3.clone(e._ellipseGeometry._center),e._ellipseGeometry._ellipsoid=n.Ellipsoid.clone(e._ellipseGeometry._ellipsoid),y.createGeometry(e)}});
