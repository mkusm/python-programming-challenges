//ⓒ Copyright Netburn Web Solutions. You may "borrow" a line here and there, but not larger pieces of the code.
function l0(n){return n>9?n:"0"+n}
function sppl(a,b){a=a+''
b=b.replace('%n',a.replace('.',p_dec_sym))
var c=b.indexOf('[')
if(c==-1)return b
var d=a.slice(-1),e=b.substr(c+2,b.indexOf(']')-c-2).split('|'),g=b.slice(0,c)
if(l=='cs'){if(a!=0&&a<5)return g+e[0];return g+e[1]}
if(l=='mk'){if(a%10==1&&a%100!=11)return g+e[1];return g+e[0]}
if((4<a&&a<21)||'056789'.indexOf(d)!=-1)return g+e[0]
if(1==d)return g+e[1]
return g+e[2]}
function nicetime(i,k){var m='',o=Math.floor(i/86400),p=i%86400
if(o==1)m+='1 '+p_d
else if(o!=0)m+=sppl(o,"%n"+p_ds)
o=Math.floor(p/3600)
if(o!=0){if(m!='')m+=', '
if(o==1)m+='1'+p_h
else if(o!=0)m+=sppl(o,"%n"+p_hs)}
p=p%3600
o=Math.floor(p/60)
if(o!=0){if(m!='')m+=', '
if(o==1)m+='1'+p_m
else if(o!=0)m+=sppl(o,"%n"+p_ms)}
if(m!='')m+=p_and
o=(p%60).toFixed(k)
if(k==0&&o==1)m+='1'+p_s;else m+=sppl(o,"%n"+p_ss)
return m}
function format_time(t,d,of){var t2
if(typeof of==U)of=0
t2=new Date(t.getTime()+of*60000)
var f=conf['t'],h=t2.getUTCHours(),s=t2.getUTCSeconds(),m=l0(t2.getUTCMilliseconds()),a='am'
m=m>99?m:"0"+m
if(11<h){a='pm';h-=12}
if(h==0)h=12
if(d===0)f=f.replace(/:?\.?s,?M?/,'')
return f.replace('h',l0(h)).replace('H',l0(t2.getUTCHours())).replace('i',l0(t2.getUTCMinutes())).replace('s',l0(s)).replace('M',m).replace('A',a)}
function build_date(r,s){var u=r.getUTCFullYear()+'',v=r.getUTCMonth()+1
var w=new Date(Date.UTC(u,0,1)),y=w.getUTCDay()-1
if(y==-1)y=6
var z=Math.floor((r-w)/604800000+(y/7)),aa=p_d+' '+Math.floor((r-w)/86400000+1)
if(y<4)z++
if(z==0){z=52
if(new Date(u-1,0,1).getDay()==4||new Date(u-1,11,31).getDay()==4)z=53}
if((z==52||z==53)&&r.getUTCDay()!=0&&27<r.getUTCDate()-r.getUTCDay())z=1
if(p_wn=='hy'){if(z==1)pwn='1-ին շաբաթ';else pwn=z+'-րդ շաբաթ'}else pwn=p_wn.replace('%n',z)
s=s.replace('%j',r.getUTCDate()).replace('%d',l0(r.getUTCDate())).replace('%W','<span class="nw">'+pwn+'</span>').replace('%n',v).replace('%m',l0(v)).replace('%y',u.substr(2,2)).replace('%Y',u).replace('%F',months[v-1]).replace('%M',monthsh[v-1]).replace('%l',days[r.getUTCDay()]).replace('%D',daysh[r.getUTCDay()]).replace('%z',aa)
if(l=='ca')s=s.replace(/ de (A|O)/,' d\'$1')
return s}
function sh_d(r){var u=r.getUTCFullYear()+'',v=r.getUTCMonth()+1
return df2.replace('%j',r.getUTCDate()).replace('%n',v).replace('%y',u.substr(2,2)).replace('%Y',u).replace('%F',months[v-1]).replace('%M',monthsh[v-1]).replace('%d',l0(r.getUTCDate())).replace('%m',l0(v))}
function TimeIs(ab,ac,ad,ae,af){var	ag=this,ab=gob(ab),ac=gob(ac),ad=gob(ad),ae=gob(ae),ah=0,ai=0,aj=0,ak=0,al='',am=0
ag.susdivo=gob('susdiv')
ag.susdivname='susdiv'
this.initClock=function(){T=new Date()
var czo=-T.getTimezoneOffset(),i=Math.abs(tD/1000).toFixed(1),an='+',ao,ap,aq=p_ss
if(ww<241)aq=p_ss_short
if(conf['o']==='')conf['o']=czo
T.setTime(T.getTime()-tD)
am=ticks
if(al!='')clearTimeout(al)
al=setTimeout('T_I.tick("",1)',updint-T%updint)
ag.tick('',0)
if(tD<0)an=''
ar=p_time_diff
if(ww<241)ar=p_time_diff_short
if(4000<Math.abs(cY)){ao=p_failh
ap=p_failm+ar.replace('%t','<span class="nw">'+an+sppl((tD/1000).toFixed(3),"%n"+aq)+'</span>').replace('%D',sppl((cY/2000).toFixed(3),"%n"+aq))}else if(i<.2){ao=p_exactt
ap=ar.replace('%t','<span class="nw">'+an+sppl((tD/1000).toFixed(3),"%n"+aq)+'</span>').replace('%D',sppl((cY/2000).toFixed(3),"%n"+aq))}else{var m=nicetime(i,1),as=p_acc
if(tD<0)ao=p_ur_late.replace('%t',m)
else ao=p_ur_early.replace('%t',m)
if(ww<321)as=p_acc_short
ap=as.replace('%t',sppl((cY/2000).toFixed(3),"%n"+p_ss))}
return [ao,ap]}
this.tick=function(id,tack){T=new Date()
var at,aq=p_ss,au,av
T.setTime(T.getTime()-tD)
var secs=T.getUTCSeconds()
if(ww<201)aq=p_ss_short
if((nextSyncT!=0&&nextSyncT<T)||T<prevT){prevT=0;syncn=0;rsy=1;httpSync()}
else if(ticks==1)httpSync()
setmsgH(0)
ticks++
prevT=T
if(auSt==1&&(5<ticks)){if(secs===0){aw=t_au1m
t_au59s.volume=0
t_au1s.volume=0}
else if(secs<58){aw=t_au1s;t_au59s.volume=0;t_au1m.volume=0}
else{aw=t_au59s;t_au1m.volume=0;t_au1s.volume=0}
if(!isNaN(aw.duration)&&(aw.duration!==0)){aw.currentTime=0;aw.volume=1}
aw.play()}
if(destT!=0){diff=Math.floor(T.getTime()/1000)-destT
if(diff<0){var diffmsg=p_time_remaining;diff=Math.abs(diff)}
else var diffmsg=p_time_since
gob('desttdiff').innerHTML=diffmsg.replace('%t',nicetime(diff,0))}
au=new Date(T.getTime())
update_big_clock(ax,clocks[0],!tack)
if(typeof other_clock!=U)other_clock(T.getUTCHours(),T.getUTCMinutes(),secs,T.getUTCMilliseconds())
if(document.readyState==='complete'&&typeof every_second!=U)every_second(au)
au.setTime(au.getTime()+get_zone_offset(clocks[0].ay,au)*60000)
var av=format_time(au,0)
if(aj!=av){if(uT)D.title=uT+av
aj=av
if(typeof current_q[T_I.susdivname]==S&&current_q[T_I.susdivname]!='')T_I.populate_sus(T_I.susdivname,current_q[T_I.susdivname],0)
au=new Date(T.getTime())
T_I.update_favs(au,!tack)}
if(!tack)return ''
al=setTimeout('T_I.tick("",1)',updint-T%updint)}
this.update_favs=function(T,az){var html='',ba
for(ba in locs['favs']){var bb=new Date(),bc=locs['favs'][ba][1],av,bd,be
bb.setTime(T.getTime()+get_zone_offset(bc,T)*60000)
av=format_time(bb,0)
if(locs['favs'][ba][9])be=locs['favs'][ba][9]
else be=locs['favs'][ba][2]
if(az){bd=''
if(ba==chosen_loc)bd='" class="chosen'
if(ba==locs['favs'].length-1)html+='<div id="homeTdiv"><h2 id="homeTh2"'
else html+='<h2 id="favbox-'+ba+'"'
html+='><a href="'+locs['favs'][ba][4].replace('$1',locs['favs'][ba][2])
html+=bd+'" id="time-'+ba+'">'+be+'<br>'+av+'</a></h2>'}else{bd=gob('time-'+ba)
if(bd)bd.innerHTML=be+'<br>'+av}}
bd=gob('favs')
if(az&&bd)bd.innerHTML=html+'</div>'}
this.check_again=function(){if(xR=='N/A')location.reload();else{rsy=1;syncn=0;httpSync()}}
this.recook=function(){var s='',i,X=''
for(i in conf){s+=X+i+conf[i];X='X'}
confs=s.replace(/ /g,'_').replace(/,/g,'1').replace(/:/g,'2').replace(/%/g,'3');setcookie('c',confs)}
this.set_susdiv=function(sdn){if(sdn!=T_I.susdivname){T_I.take_chosen(T_I.susdivname,0);T_I.susdivname=sdn;T_I.susdivo=gob(sdn)}}
this.populate_sus=function(sdn,thisq,f){if(f)chosen_sus[sdn]=sus[thisq].length
var ts=new Date(),su=sus[thisq],slist='<table cellpadding="0">',ch,ncn='',n=sdn.replace('susdiv',''),av
if(su.length!==0)
for(var i in su){if(2<su[i].length){if((0<su[i][5])&&(su[i][5]<T.getTime())){su[i][4]=su[i][6]
su[i][5]=0}
ts.setTime(T.getTime()+(su[i][4])*60000)
av=format_time(ts,0)
if(typeof su[i][7]=='string')su[i][7]=su[i][7].split(',')
for(j=0;j<4;j++){su[i][j]=su[i][j].replace(/\$6/g,su[i][7][2]).replace(/\$5/g,su[i][7][1]).replace(/\$4/g,su[i][7][0]).replace(/\$2/g,su[i][2]).replace(/\$1/g,su[i][1]).replace(/\$/g,su[i][0]);if(su[i][j]=='')su[i][j]=su[i][0]}
su[i][2]=su[i][2].replace(/ /g,'_')
ch='';if(i==chosen_sus[sdn])ch='" class="chosen'
slist+='<tr valign="top" id="'+sdn+'s'+i+ch+'"><td><a href="'+susdest+su[i][2]+susdestquery+'" onclick="return T_I.susgo(\''+jsesc(su[i][0])+'\',\''+jsesc(su[i][1])+'\',\''+jsesc(su[i][2])+'\',\''+jsesc(su[i][3])+'\')" onmouseover="T_I.choose_sus(\''+sdn+'\','+i+')"><span>'+su[i][1]+'</span></a></td><td class="t"><a href="'+susdest+su[i][2]+susdestquery+'" onclick="return T_I.susgo(\''+jsesc(su[i][0])+'\',\''+jsesc(su[i][1])+'\',\''+jsesc(su[i][2])+'\',\''+jsesc(su[i][3])+'\')" onmouseover="T_I.choose_sus(\''+sdn+'\','+i+')"><span>'+av+'</span></a></td></tr>'}}else{slist+='<tr><td><a href="./"><span>'+p_no_match+'</span></a></td><td class="t">&nbsp;</td></tr>'
ncn='error '}
gob(sdn).innerHTML=slist+'</table>'
gob('q'+n).className=gob('q'+n).className.replace('error','').replace('txtin ','txtin '+ncn)
current_q[sdn]=thisq
if(0<su.length&&sdn!='susdiv'&&T_I.susdivname!=sdn){complocurls[n]=[su[0][3],su[0][2]]
gob('q'+n).value=su[0][3].replace('&nbsp;',' ')
gob(sdn).innerHTML=''
current_q[sdn]=''
return ''}}
this.cycle_sus=function(sdn,n){if((current_q[sdn]!='')&&(typeof sus[current_q[sdn]]!=U)){var new_chosen=chosen_sus[sdn]+n
if(new_chosen<0)new_chosen=sus[current_q[sdn]].length-1
if(new_chosen>=sus[current_q[sdn]].length)new_chosen=0
this.choose_sus(sdn,new_chosen)}}
this.choose_sus=function(sdn,i){if(typeof sus[current_q[sdn]]!=U){if(i!==chosen_sus[sdn]&&chosen_sus[sdn]<sus[current_q[sdn]].length)gob(sdn+'s'+chosen_sus[sdn]).className=''
var o=gob(sdn+'s'+i)
if(o!=N){o.className='chosen';chosen_sus[sdn]=i}}}
function jsesc(s){return s.replace("'","\\\'").replace('"','\\\'')}
sus=[]
chosen_sus=[]
prevsustime=[]
current_q=[]
prevq=[]
this.susgo=function(nm,p,u,d){if(T_I.susdivname=='susdiv'||T_I.susdivname=='susdivB')location=susdest+u+susdestquery
else{losefocus(T_I.susdivname)
var n=T_I.susdivname.replace('susdiv','')
gob('q'+n).value=d.replace('&nbsp;',' ')
complocurls[n]=[d,u]
T_I.susdivo.innerHTML=''
n++
if(gob('q'+n)!=N)setfocus('q'+n)}}
this.take_chosen=function(sd,k){if(sd!='susdiv'&&sd!='susdivB'){var sn=chosen_sus[sd],q=current_q[sd],W=sus[q]
if(k==13&&q==''){submission=E
return E}
qv=gob('q'+sd.replace('susdiv','')).value
if(qv.length<4)qv=qv.toLowerCase()
if(q!=qv)return F
if(typeof W!=U){if(W.length==0)return F
if(W.length==sn)sn=0
W=W[sn]
T_I.susgo(W[0],W[1],W[2],W[3])}
if(k==13){submission=F
var n=sd.replace('susdiv','')
n++
if(gob('q'+n)!=N){gob('q'+n).focus()}}
else submission=E}
return F}
this.submit=function(q){var u='',sdn=T_I.susdivname,i=chosen_sus[sdn]
if(q!=current_q[sdn])return E
if(current_q[sdn]!=''){if(i>=sus[current_q[sdn]].length)i=0
if(sus[current_q[sdn]].length!==0)u=sus[current_q[sdn]][i][2]
else if(q.length!=0)return E}
T_I.susgo('','',u,'')
return F}
this.reconf=function(){this.recook();var cl=gob('confl');if(cl)cl.href=cl.href.replace(/c=.+&/,'c='+confs+'&');aj=0
clocks[0].ah=0;clocks[0].time_format=conf['t'];clocks[0].bf=conf['d']
this.tick('',0)}}
function setsizes(f){ww=D.body.offsetWidth?D.body.offsetWidth:window.innerWidth?window.innerWidth:1
if(wh==1||bfc)wh=window.innerHeight?window.innerHeight:D.documentElement.clientHeight?D.documentElement.clientHeight:D.body.clientHeight
if(f||!bh){if(-1!==navigator.userAgent.indexOf('MSIE'))onresize=''
cvwidth=(ww*.9).toFixed(0)
screensize_class=set_mw()
var bi=93,bj=62,bk=0,bl=gob('dd').offsetHeight+gob('pL').offsetHeight+20,bm=22,bn=44,bo=gob('favs')
if(bo)bo=bo.offsetHeight+10
if(screensize_class==' sscr'){bi=45
bj=27
bl-=10
bm=16
bn=32}
if(dmode||noctp==1){bj=bm=bn=bo=0}
var cT=conf['t'],bp=gob('clock0'),bq=gob('ampm')
maxtimeLH=wh-bi-bj-bl-bm-bn-bo-adheight
if(wh/2.7<maxtimeLH)maxtimeLH=wh/3
br=bs(clock_aspect,cvwidth,maxtimeLH,mZ,conf[zm[dmode]])
timeLH=br[0]
bt=br[1]
timeFS=Math.floor(timeLH/.83)
if(conf['f']!='t')bk=timeLH*.05
ax=Math.floor(timeFS/4)
if(ax<mZ)ax=mZ
if(ltr==1){bp.style.marginLeft=bt+'px'}
else{bp.style.marginRight=bt+'px'}
bp.style.fontSize=timeFS+'px'
bp.style.lineHeight=timeLH+'px'
var bu=gob('ampm')
if(bu)bu.style.fontSize=bu.style.lineHeight=ax+'px'
if(typeof ndp!=U){var bv=gob('dd')
bv.style.fontSize=Math.ceil(timeFS*.80)+'px'
bv.style.lineHeight=Math.ceil(timeFS*.95)+'px'
bv.style.fontWeight='bold'
bv.style.fontStyle='normal'}
cvT=0
var bw=0
if(true){if(screensize_class==' sscr')bw=-10
else bw=-20}
var i,bx,by=['msgs','clock0','dd','daydiv','pL','lC','ads']
for(i in by){bx=gob(by[i])
if(bx)cvT+=bx.offsetHeight}
cvT=Math.floor((wh-cvT)/2-gob('top').offsetHeight-20) //-bk-bo)
if(screensize_class==' sscr')cvT+=10
setmsgH(0)
var mapo=gob('map_cv')
if(mapo!=N){mapo.style.width=ww+'px'
mapo.style.height=wh+'px'
if(typeof map==O)google.maps.event.trigger(map,'resize')}
if(typeof navbgdiv==O){scrollTo(0,navbgdiv.offsetHeight);navbgdiv=''}}}
function bs(bz,ca,cb,cc,cd){var ce=Math.round(bz*ca*.99)
if(cb<ce)ce=cb
ce=Math.max(Math.floor(ce*cd),cc)
bt=Math.floor((ca-ce/bz)/2)
return [ce,bt]}
function setmsgH(yO){if(!noctp){var cf=0
if(!A)cf=gob('cv').offsetHeight
gob('cv').style.position='absolute'
gob('cv').style.bottom=0
gob('cvwr').style.height=Math.max(Math.max(cf,cvT)-yO,0)+'px'}}
function set_mw(){var cg='',mw=cvwidth-412,ch=gob('menu')
if(ww<729){cg=' sscr'
mw+=224}
else if(gob('top').className=='more')mw+=224
if(mw<230)mw=230
if(ch!=N)ch.style.width=mw+'px'
bod.className=bod.className.replace(' sscr','')+cg
return cg}
function set_clock_aspect(){ci=gob('twd')
if(bg)return clock_aspect
clock_aspect=ci.offsetHeight/ci.offsetWidth}
function beginning_of_time(){chosen_loc=locs['favs'].length-1
clocks=[]
clocks[0]=new clock(chosen_loc,'twd','dd','daydiv','sun','pL','facts0',conf['t'],conf['d'],0)
set_clock_aspect()
setsizes(2)
T_I=new TimeIs('twd','dd','daydiv','pL','lC')
T_I.initClock()}
function clock(cj,ck,ac,ad,cl,ae,cm,cn,bf,co){this.ck=gob(ck)
this.ac=gob(ac)
this.ad=gob(ad)
this.cl=gob(cl)
this.ae=gob(ae)
this.ah=0
this.t=0
this.time_format=cn
this.bf=bf
this.cp=''
this.co=co
this.setLoc=function(cq,cr,cs){var ct=locs[cq].length,cu
cr=(cr+ct)%ct
cu=locs[cq][cr]
if(!cs&&cq==ag.cq&&cr==ag.cr)return F
ag.cp=cu[2]
ag.cv=cu[3].replace(/\$1/g,cu[2])
if(cu[9])ag.cp=ag.cv=cu[9]
ag.ay=cu[1]
ag.cq=cq
ag.cr=cr
update_big_clock(ax,ag,1)
var cw='w90 tr'
if(A){cw='w90'}
ag.ac.className=ag.ad.className=ag.ae.className=cw
return E}
var ag=this
this.setLoc('favs',cj)}
function tl_a(){if(auSt==0){try{if((!!D.createElement('audio').canPlayType)&&(-1===navigator.userAgent.indexOf('MSIE'))){if(t_au1m===0){t_au1s=new Audio()
var audiotype='.mp3'
if(t_au1s.canPlayType('audio/ogg')!=='')audiotype='.ogg'
var lp=1;if(-1===navigator.userAgent.indexOf('WebKit')){audiotype='_'+audiotype;lp=0}}
for(var i in auf)eval('if(t_au1m===0){t_au'+auf[i]+'=new Audio();t_au'+auf[i]+'.src="/audio/'+auf[i]+'"+audiotype;if(lp)t_au'+auf[i]+'.loop=E}t_au'+auf[i]+'.volume=0;t_au'+auf[i]+'.play()')
auSt=1}else alert(p_no_au)}catch(err){alert(p_no_au)}}else{for(var i in auf){eval('t_au'+auf[i]+'.pause()')};auSt=0}
var lp='p0 ';if(auSt)lp=''
gob('aub').className=lp+'status'+auSt}
function get_sb(k){var fun={"f":(function(){var d=document,s='script',id='facebook-jssdk',js,fjs=d.getElementsByTagName(s)[0]
if(d.getElementById(id))return
js=d.createElement(s);js.id=id
js.src='//connect.facebook.net/'+lang+'/all.js#xfbml=1'
fjs.parentNode.insertBefore(js,fjs)}),"t":(function(){gob('socb_t').innerHTML='<div style="margin-right:10px"><a href="https://twitter.com/share" class="twitter-share-button" data-text="'+tweet+'" data-lang="'+glang+'" data-via="Time_is" data-size="large" data-count="none">Tweet</a></div><div style="clear:none"><a href="https://twitter.com/Time_is" class="twitter-follow-button" data-size="large" data-show-count="false" data-show-screen-name="true" data-lang="'+glang+'">Follow @Time_is</a></div>'
var d=document,s="script",id="twitter-wjs",js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}),g:(function(){___gcfg={lang:glang}
var po=D.createElement('script');po.type='text/javascript';po.async=true
po.src='https://apis.google.com/js/plusone.js'
var s=D.getElementsByTagName('script')[0];s.parentNode.insertBefore(po,s)}),"in":(function(){var po=D.createElement('script');po.type='text/javascript';po.async=true
po.src='//platform.linkedin.com/in.js'
var s=gob('linkedin');s.parentNode.insertBefore(po,s)
gob('socb_in').innerHTML='<script type="IN/Share" data-url="'+like_url+'"></sc'+'ript>'}),su:(function(){var li=D.createElement('script');li.type='text/javascript';li.async=true
li.src=('https:'==D.location.protocol?'https:':'http:')+'//platform.stumbleupon.com/1/widgets.js'
var s=D.getElementsByTagName('script')[0];s.parentNode.insertBefore(li,s)}),p:(function(){gob('pinA').innerHTML='<img src="//assets.pinterest.com/images/PinExt.png" alt="Pin It"/>'
var li=D.createElement('script');li.type='text/javascript';li.async=true
li.src=('https:'==D.location.protocol?'https:':'http:')+'//assets.pinterest.com/js/pinit.js'
var s=D.getElementsByTagName('script')[0];s.parentNode.insertBefore(li,s)}),m:(function(){})}
fun[k]()}
function sb_o(k,x){if(x){if(s_on!=k){var f=0
if(typeof soc_a[k]==U)f=1
if(s_on)sb_o(s_on,0)
gob('btn_'+k).style.backgroundPosition=rg[k]+'px 0'
gob('socbuttons').className=''
gob('socb_'+k).className=gob('social_div').className=''
var h=44;if(k=='f')h=72;if(k=='m'){h=380;gob('sender_name').focus()}gob('social_div').style.height=h+'px'
s_on=k
if(f)get_sb(k)}}else{if(soc_a[k]==1){soc_a[k]=0
if(k=='m')gob('sender_name').blur()
gob('social_div').className=gob('socb_'+k).className='hide'
gob('btn_'+k).style.backgroundPosition=rg[k]+'px 32px'
gob('socbuttons').className='off'
s_on=F}}
soc_a[k]=x
return F}
function t_sb(k){if(s_on===k)sb_o(k,0)
else sb_o(k,1)
return F}
function t_wb(){var c=bod.className
if(-1!=c.indexOf('wb')){bod.className=c.replace('wb','bw')
conf['c']='0'}else{bod.className=c.replace('bw','wb')
conf['c']='1'}
T_I.reconf()}
function t_s(){var X=conf['t'][1]
if('i'==X)X=''
if(-1==conf['t'].indexOf('s')){conf['t']=conf['t'].replace('i','i'+X+'s')}
else{conf['t']=conf['t'].replace(X+'s','')}
T_I.reconf()
set_clock_aspect()
setsizes(1)
T_I.tick('',0)}
function chk(o){return o.checked?1:0}
function ajMail(sn,s,rn,r,u,sd){gob('mailform').className='hide'
sd=gob(sd)
mR=N
if(window.XMLHttpRequest)mR=new window.XMLHttpRequest()
else if(window.ActiveXObject)mR=new ActiveXObject("Microsoft.XMLHTTP")
if(mR!=N){mR.onreadystatechange=aMr
mR.open('POST','/ajaxmail/',E)
mR.setRequestHeader('Content-type','application/x-www-form-urlencoded')
mR.send('sn='+sn+'&s='+s+'&rn='+rn+'&r='+r+'&u='+u)
sd.innerHTML='<h2>'+'Sending...'+'</h2>'}else mR='N/A'
return F}
function aMr(){if(mR.readyState==4){if(mR.status==200){gob('mailstatusdiv').innerHTML='<h2>'+mR.responseText+'</h2><p><a href="javascript:another_mail()">Send another</a>?</p>'}else{if(mR.statusText!="")gob('mailstatusdiv').innerHTML='('+mR.statusText+')'}}}
function another_mail(){gob('mailform').className=gob('mailstatusdiv').innerHTML=gob('receiver_name').value=gob('receiver_email').value='';gob('receiver_name').focus()}
function init_s(rl,fb_u,p_u,p_i,p_d,m_u,colrs,ph_l,ph_yn,ph_ye,ph_rn,ph_re,ph_sm){var H='" class="hide"><'
gob('social_div').innerHTML='<div id="fb-root"></div><div id="socb_f'+H+'div class="fb-like" data-href="'+fb_u+'" data-send="true" data-width="284" data-show-faces="true"'+colrs+'></div></div><div id="socb_t" style="width:284px'+H+'/div><div id="socb_g'+H+'div><div class="g-plusone" data-annotation="none"></div></div><div style="clear:none;padding-left:5px"><div class="g-plus" data-action="share" data-height="24"></div></div></div><div id="linkedin" style="margin-'+rl+':44px'+H+'div style="color:#999">'+ph_l+'</div></div><div id="socb_in" style="margin:0 96px 0 126px'+H+'div style="color:#999">'+ph_l+'</div></div><div id="socb_su" style="margin:0 56px 0 168px'+H+'su:badge layout="2"><div style="color:#999">'+ph_l+'</div></su:badge></div><div id="socb_p" style="margin:0 12px 0 210px'+H+'a href="http://pinterest.com/pin/create/button/?url='+p_u+'&amp;media='+p_i+'&amp;description='+p_d+'" class="pin-it-button" count-layout="horizontal" id="pinA"></a></div><div id="socb_m'+H+'form id="mailform" action="/mail" method="post" autocomplete="off" accept-charset="UTF-8" \
onsubmit="return ajMail(gob(\'sender_name\').value,gob(\'sender_email\').value,gob(\'receiver_name\').value,gob(\'receiver_email\').value,\''+m_u.replace("'","\\'")+'\',\'mailstatusdiv\')"><label for="sender_name" id="sender_name_label" class="blr">'+ph_yn+'</label><input type="text" id="sender_name" name="sender_name" value="" maxlength="100" class="txtin blr mout" onfocus="focusitem(this);focusitem(\'sender_name_label\')" onblur="bluritem(this);bluritem(\'sender_name_label\')" onmouseover="mouseover(this)" onmouseout="mouseout(this)" style="width:270px;padding:5px"/><label for="sender_email" id="sender_email_label" class="blr">'+ph_ye+'</label><input type="email" id="sender_email" name="sender_email" value="" maxlength="100" class="txtin blr mout" onfocus="focusitem(this);focusitem(\'sender_email_label\')" onblur="bluritem(this);bluritem(\'sender_email_label\')" onmouseover="mouseover(this)" onmouseout="mouseout(this)" \
style="width:270px;padding:5px"/><label for="receiver_name" id="receiver_name_label" class="blr">'+ph_rn+'</label><input type="text" id="receiver_name" name="receiver_name" value="" maxlength="100" class="txtin blr mout" \
onfocus="focusitem(this);focusitem(\'receiver_name_label\')" onblur="bluritem(this);bluritem(\'receiver_name_label\')" onmouseover="mouseover(this)" onmouseout="mouseout(this)" style="width:270px;padding:5px"/><label for="receiver_email" id="receiver_email_label" class="blr">'+ph_re+'</label><input type="email" id="receiver_email" name="receiver_email" value="" maxlength="100" required="required" class="txtin blr mout" onfocus="focusitem(this);focusitem(\'receiver_email_label\')" onblur="bluritem(this);bluritem(\'receiver_email_label\')" onmouseover="mouseover(this)" onmouseout="mouseout(this)" style="width:270px;padding:5px"/><input type="hidden" name="url" value="'+m_u+'"/><input type="submit" accesskey="3" value="'+ph_sm+'" \
class="button blr mout" onfocus="focusitem(this)" onblur="bluritem(this)" onmouseover="mouseover(this)" onmouseout="mouseout(this)"/></form><div id="mailstatusdiv"></div></div>'
var h='';for(var k in rg)h+='<a id="btn_'+k+'" href="/" onclick="return t_sb(\''+k+'\')" onmouseover="sb_o(\''+k+'\',1);setfocus(\'social_div\')" onmouseout="losefocus(\'social_div\')" style="display:block;float:left;margin-'+rl+':10px;border:0;width:32px;height:32px;background:url(\'/img/social_icons5.png\') '+rg[k]+'px 32px"></a>'
gob('socbuttons').innerHTML=h
gob('socbuttons').onclick=gob('social_div').onclick=function(ev){var e=ev?ev:event;if(e.stopPropagation)e.stopPropagation();e.cancelBubble=E}
bod.onclick=function(){if(s_on){sb_o(s_on,0);losefocus('social_div')}}}
function get_zone_offset(ay,T){if(typeof zones[ay][2]=='string')ay=zones[ay][2]
if(zones[ay].length==3){zones[ay][3]=zones[ay][2][0]
zones[ay][4]=1}
while(zones[ay][4]<zones[ay][2].length&&zones[ay][2][zones[ay][4]]<=T.getTime()/1000){zones[ay][3]=zones[ay][2][zones[ay][4]+1]
zones[ay][4]+=2
sus=[]
chosen_sus=[]
prevsustime=[]
current_q=[]}
return zones[ay][3]}
function update_big_clock(ax,cx,cy){var au=new Date(T.getTime()),cz=get_zone_offset(cx.ay,au),da=cz*60000
db=cx.time_format
au.setTime(au.getTime()+da)
cx.t=au
var h=au.getUTCHours(),dc='am',secs=au.getUTCSeconds(),ms=l0(au.getUTCMilliseconds());ms=ms>99?ms:"0"+ms
cx.hours=h
cx.minutes=au.getUTCMinutes()
if(11<h){dc='pm';h-=12}
if(h==0)h=12
//db='Hh:i:s:mA'
//de('full r' + cy+ ' '+dd+cx.ah)
//console.log(db)
db=db.replace('h',l0(h)).replace('H',l0(au.getUTCHours())).replace('i',l0(au.getUTCMinutes())).replace('s',l0(secs)).replace('M',ms).replace('A','<span id="ampm" style="font-size:'+ax+'px;line-height:'+ax+'px">'+dc+'</span>')
bh=0
if(/Firefox/.test(navigator.userAgent)&&/11/.test(db)){bg=1;bh=1;db='<div>'+db.replace(/11/g,'1</div><div>1')+'</div>'}
else bg=0
if(/MSIE/.test(navigator.userAgent))bh=1
cx.ck.innerHTML=db
var dd=l0(au.getUTCMonth()+1)+''+l0(au.getUTCDate())
if(cy||dd!=cx.ah){if(cx.ah!=0){if(cx.cl&&typeof ss[dd]!=U)cx.cl.innerHTML=ss[dd]
else gob('locw').innerHTML=''}
var de=build_date(au,cx.bf)
cx.ac.innerHTML=de
if(typeof spdays[dd]!=U&&spdays[dd]!=''){cx.ad.innerHTML=spdays[dd]
cx.ad.style.className='w90 tr noprint'}
else cx.ad.className='hidden'
cx.ah=dd}}
function nice_approx_time(n,t,d,df){n=Math.round(n-t)
var a=Math.abs(n),h='',i=0
if(d){d=Math.ceil(a/86400)
if(n<0)d--
if(d==1){if(n<0)return p_yesterday
else return p_tomorrow}
if(d==0)return p_today}
if(a>84599)
a=Math.round(a/86400)
else if(a>59){h=Math.floor(a/3600)
a=Math.round(a%3600/60)
if(a==60){a=0;h++}
if(h>0){if(1==h)h=h+p_h
else h=sppl(h,"%n"+p_hs)
if(a==0)a=''
else h+=p_and}else h=''
i=2}else
i=3
if(-df<n&&n<1)return p_now
if(1==a)a=a+units_sing[3-i]
else if(a!='')a=sppl(a,"%n"+units[3-i])
if(n<0)return p_ago.replace('%n',h+a)
return p_in_n.replace('%n',h+a)}
function make_nice_zone_diff_sentence(dg,dh,di,dj){var dk=dh-dj,dl,dm,dn
if(dk==0)
dl=p_zone_diff_same
else{dp=Math.floor(Math.abs(dk/60))
if(dp==1)dm=1+p_h
else dm=sppl(dp,'%n'+p_hs)
dn=Math.abs(dk%60)
if(dn==0)dn=''
else{if(dp==0){dm=''
dn=sppl(dn,'%n'+p_ms)+' '}else dn=p_and+sppl(dn,'%n'+p_ms)+' '}
if(dk<0)dl=p_a_behind_b
else dl=p_a_ahead_of_b}
return dl.replace('%a',dg).replace('%b',di).replace('%t',dm+dn)}
debugcounter=0
function de(s){debugcounter++
var d=gob('debug')
if(!d){d=D.createElement('div')
d.id='debug'
d.style.zindex='200'
d.style.position='fixed'
d.style.top='200px'
gob('cvwr').insertBefore(d)
d=gob('debug')}
d.innerHTML=s+' ('+(new Date).getUTCMilliseconds()+') '+debugcounter}
var auf=['1s','59s','1m'],t_au1s=0,t_au59s=0,t_au1m=0,auSt=0,bh=0,confs='',rg={f:224,t:192,g:160,"in":128,su:96,"p":64,"m":32},cvT=0,chosen_loc=0,zm=['z','Z'],screensize_class='',ax=21,bg=0,prevT=0,nextSyncT=0,susdestquery=''
s_on=0,soc_a=[],alarm_time=0,ww=1,wh=1
clock_aspect=0.2,T=new Date()
