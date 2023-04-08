
import './globals.css'
import { MajorProvider } from '@/context/majorContext'
import { SubjectProvider } from '@/context/subjectContext'
import { TeacherProvider } from '@/context/teacherContext'
import { ScheduleProvider } from '@/context/scheduleContext'

export const metadata = {
  title: 'Kronario',
  description: 'Kronario es una aplicación para seleccionar tu horario universitario en la universidad del norte.',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='font-roboto bg-white'>
       <MajorProvider>
          <SubjectProvider>
            <TeacherProvider>
              <ScheduleProvider>
        { children }
              </ScheduleProvider>
            </TeacherProvider>
          </SubjectProvider>

        </MajorProvider>
      </body>
    </html>
  )
}
