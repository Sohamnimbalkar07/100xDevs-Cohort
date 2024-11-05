import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import './App.css'
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom, totalNotificationSelector } from './Store/Atom/atom'
function App() {

  return (
    <RecoilRoot>
      <MainApp/>
    </RecoilRoot>
  )
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom)
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const notificationsAtomCount = useRecoilValue(notificationsAtom)
  const messagingAtomCount = useRecoilValue(messagingAtom)
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  return (
    <>
      <button>Home</button>
      
      <button>My network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
      <button>Jobs ({jobsAtomCount})</button>
      <button>Messaging ({messagingAtomCount})</button>
      <button>Notifications ({notificationsAtomCount})</button>

      <button>Me ({totalNotificationCount})</button>
    </>
  )
}

export default App
