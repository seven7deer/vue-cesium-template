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
define(["./when-a55a8a4c","./Check-bc1d37d9","./Math-d7cbfcf6","./Cartesian2-6ec3db89","./AttributeCompression-6cfb9427","./createTaskProcessorWorker"],function(a,e,v,y,A,r){"use strict";var M=32767,R=new y.Cartographic,x=new y.Cartesian3,D=new y.Rectangle,E=new y.Ellipsoid,F={min:void 0,max:void 0};return r(function(a,e){var r=new Uint16Array(a.positions);!function(a){a=new Float64Array(a);var e=0;F.min=a[e++],F.max=a[e++],y.Rectangle.unpack(a,e,D),e+=y.Rectangle.packedLength,y.Ellipsoid.unpack(a,e,E)}(a.packedBuffer);var t=D,n=E,i=F.min,s=F.max,o=r.length/3,c=r.subarray(0,o),u=r.subarray(o,2*o),p=r.subarray(2*o,3*o);A.AttributeCompression.zigZagDeltaDecode(c,u,p);for(var f=new Float64Array(r.length),h=0;h<o;++h){var l=c[h],d=u[h],m=p[h],C=v.CesiumMath.lerp(t.west,t.east,l/M),b=v.CesiumMath.lerp(t.south,t.north,d/M),g=v.CesiumMath.lerp(i,s,m/M),w=y.Cartographic.fromRadians(C,b,g,R),k=n.cartographicToCartesian(w,x);y.Cartesian3.pack(k,f,3*h)}return e.push(f.buffer),{positions:f.buffer}})});
