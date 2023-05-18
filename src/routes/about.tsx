import Layout from '@/components/Layout/Layout'
import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Link,
  List,
  ListItem,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'

const AboutPage = () => {
  return (
    <Layout>
      <Container maxW={'7xl'} py={20}>
        <Heading as={'h1'} size={'4xl'} mb={10}>
          About
        </Heading>
        <Box as="section">
          <Heading as="h2">Profile</Heading>
          <Text>
            Experienced Web Developer is adept in all stages of advanced web
            development. Knowledgeable in a user interface/design process,
            testing, and debugging processes, also develop secure web
            applications from vulnerabilities (CSRF, XSS, etc).
          </Text>
          <Text>
            Equipped with a diverse and promising skill-set. Proficient in an
            assortment of technologies Node, PHP, React Js, UI Design Tools (XD,
            Figma, etc), MySQL, MongoDB, Serverless, Headless CMS, CI/CD. Able
            to effectively self-manage during independent projects, and work
            well with a team.
          </Text>
        </Box>
        <Box as="section" mt={8}>
          <Flex mx={-4}>
            <Box w={'50%'} p={4}>
              <Heading as={'h2'}>Work Experience</Heading>
              <List mt={4} className="timeline">
                <ListItem>
                  <div className="title bg-theme">2021 - 2023 (Freelance)</div>
                  <div className="details">
                    <Heading as="h5">
                      Front End Developer at With Love Internet
                    </Heading>
                    <small className="fg-theme">Eban Aban, Israel</small>
                    <Text>- Slicing Design into Reactjs/Nextjs/Gatsby</Text>
                    <Text>- Fix a web apps bugs (JAMSTACK)</Text>
                    <Text>
                      - Web animation (Framer-motion, popperjs, react-spring)
                    </Text>
                    <Text>- Web SEO</Text>
                  </div>
                </ListItem>
                <ListItem>
                  <div className="title">2020 (Fulltime)</div>
                  <div className="details">
                    <Heading as="h5">FullStack at Elisoft Technology</Heading>
                    <small className="fg-theme">Jakarta, Indonesia</small>
                    <Text>
                      - Build/Modify/Fix web application design (Functionality &
                      UI)
                    </Text>
                    <Text>- Made a beautiful UI Design</Text>
                    <Text>- Build a Design Systems</Text>
                    <Text>- Firebase (Hosting, Database, Auth)</Text>
                  </div>
                </ListItem>
                <ListItem>
                  <div className="title">2018 - 2019 (Remote, Part Time)</div>
                  <div className="details">
                    <Heading as="h5">Front End Developer at Graygrids</Heading>
                    <small className="fg-theme">Rangpur, Bangladesh</small>
                    <Text>- Slicing Design into HTML5 Templates</Text>
                    <Text>- Create Templates documentation</Text>
                  </div>
                </ListItem>
              </List>
            </Box>
            <Box w={'50%'} p={4}>
              <Heading as={'h2'}>Education/Certification</Heading>
              <List mt={4} className="timeline">
                <ListItem>
                  <div className="title bg-theme">2012 - 2015</div>
                  <div className="details">
                    <Heading as="h5">SMK Al-Farabi (High School)</Heading>
                    <small className="fg-theme">Networking</small>
                  </div>
                </ListItem>
                <ListItem>
                  <div className="title">2015 - 2019 (Leave)</div>
                  <div className="details">
                    <Heading as="h5">UHAMKA (University)</Heading>
                    <small className="fg-theme">Informatic Engineering</small>
                    <Text>
                      Organizational experience: HIMA (2016) and IMM (2016-2017)
                    </Text>
                  </div>
                </ListItem>
                <ListItem>
                  <div className="title">2016</div>
                  <div className="details">
                    <Heading as="h5">Ifest</Heading>
                    <small className="fg-theme">
                      3rd Web Application Competition
                    </small>
                  </div>
                </ListItem>
              </List>
            </Box>
          </Flex>
        </Box>

        <Box as="section" mt={8}>
          <Heading as={'h2'}>Skills</Heading>
          <List display={'inline-flex'} sx={{ '& li': { mr: 2 } }}>
            <ListItem>
              <Box className="badge badge-sk">HTML5</Box>
            </ListItem>
            <ListItem>
              <Box className="badge badge-sk">CSS3</Box>
            </ListItem>
            <ListItem>
              <Box className="badge badge-sk">Less, SCSS</Box>
            </ListItem>
            <ListItem>
              <Box className="badge badge-sk">JavaScript</Box>
            </ListItem>
            <ListItem>
              <Box className="badge badge-sk">Typescript</Box>
            </ListItem>
            <ListItem>
              <Box className="badge badge-sk">Redux</Box>
            </ListItem>
            <ListItem>
              <Box className="badge badge-sk">jQuery</Box>
            </ListItem>
            <ListItem>
              <Box className="badge badge-sk">Reactjs</Box>
            </ListItem>
            <ListItem>
              <Box className="badge badge-sk">Nextjs</Box>
            </ListItem>
            <ListItem>
              <Box className="badge badge-sk">PHP</Box>
            </ListItem>
            <ListItem>
              <Box className="badge badge-sk">Nodejs</Box>
            </ListItem>
            <ListItem>
              <Box className="badge badge-sk">Git</Box>
            </ListItem>
            <ListItem>
              <Box className="badge badge-sk">CI/CD</Box>
            </ListItem>
            <ListItem>
              <Box className="badge badge-sk">ORM (Prisma)</Box>
            </ListItem>
          </List>
        </Box>
        <Box as="section" mt={8} sx={{ '& li': { display: 'block' } }}>
          <Heading as={'h2'} mb={4}>
            Languages
          </Heading>
          <Heading as="h3" size="md">
            English
          </Heading>
          <Wrap spacing={8} mb={4}>
            <WrapItem>
              <b>Written:</b> Fluent
            </WrapItem>
            <WrapItem>
              <b>Spoken:</b> Fair
            </WrapItem>
            <WrapItem>
              <b>Read:</b> Fair
            </WrapItem>
          </Wrap>
          <Heading as="h3" size="md">
            Bahasa
          </Heading>
          <Wrap spacing={8}>
            <WrapItem>
              <b>Written:</b> Fluent
            </WrapItem>
            <WrapItem>
              <b>Spoken:</b> Fluent
            </WrapItem>
            <WrapItem>
              <b>Read:</b> Fluent
            </WrapItem>
          </Wrap>
        </Box>
        <Box as="section" mt={8}>
          <Heading as={'h2'}>Portfolio</Heading>
          <Heading as={'h3'} size={'md'} mt={4}>
            Latest Projects
          </Heading>
          <Grid
            gridGap={[4, 6, 8]}
            gridTemplateColumns={'repeat(12,[col] 1fr)'}
            mb={10}
            sx={{
              '& a': {
                position: 'relative',
                display: 'block',
                borderRadius: 4,
                overflow: 'hidden',
                _hover: {
                  textDecoration: 'none',
                },
              },
              '& figcaption': {
                padding: '16px 24px',
                backgroundColor: '#171925',
                color: '#fff',
                fontSize: 14,
                borderRadius: '0 0 4px 4px',
                '& div': {
                  color: 'primary',
                  fontSize: 20,
                  mb: 1,
                },
              },
            }}
          >
            <GridItem gridColumn={['1/-1', 'span 6/span 6', 'span 4/span 4']}>
              <Link
                href="https://myfreedoctor.vercel.app"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                <figure>
                  <img
                    src="https://images.prismic.io/withloveinternet/dcdf5c88-9ec8-4b28-a0ee-a558136dbb73_For-PrismicArtboard-6.png?auto=compress,format&rect=0,0,800,534&w=800&h=534"
                    alt="My Freedoctor"
                  />
                  <figcaption>
                    <div>MyFreeDoctor</div>
                    <span>Telehealth Service Website</span>
                  </figcaption>
                </figure>
              </Link>
            </GridItem>
            <GridItem gridColumn={['1/-1', 'span 6/span 6', 'span 4/span 4']}>
              <Link
                href="https://www.exavault.com"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                <figure>
                  <img
                    src="https://images.prismic.io/withloveinternet/8e388b0e-1d1f-49b9-b719-dddcbe76832d_For-PrismicArtboard-1.png?auto=compress,format&rect=0,33,800,534&w=800&h=534"
                    alt="Exavault website"
                  />
                  <figcaption>
                    <div>ExaVault</div>
                    <span>SaaS Application</span>
                  </figcaption>
                </figure>
              </Link>
            </GridItem>
            <GridItem gridColumn={['1/-1', 'span 6/span 6', 'span 4/span 4']}>
              <Link
                href="https://jenzabar.com"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                <figure>
                  <img
                    src="https://lh3.googleusercontent.com/Hsc_f8umnBxOGpEru8zf18hucUWDebgywujlpkiVKN_ETPdd-3hxEN_wxLSYLAppRonznREs9CNIn0yBh5tYM6kasbsMiOuHvhZYLnuGqUM3ztzQoIX1rqpl3y3_aQVROARiPTfdN9_XecqAFZgA2GRv7gHF7i5xBSoKSF8Or2dFFGPUVAQ4VclLHFPSJRoxtKQi-aP3X4Nm8dkPlFOPL3vcE4a9OiyHP5VibijdsixKaVDooDRUUL7VIQDUZ5UufCXbt_wAeL0dXabeXKhLnqyALL5tHvWGBOk7oT_FKui0zKi0ntryFkfFtG3yjxCePxomzfUHVpmJujjeEoCSGBIbkT4MTBmTQP_BoCJAGz0tfqcxxv_lDvDiegTb_9S5qlsHW-JiWaEQFSm1MpXUy5BHVuXxj5KsfmztJPaNTKbIwrJidD9XtYPNTozuceVjHFmBt-nQAZ1teT3tDhfUzG92pBCWYlyx0VSNsivIGbzzc9NUaaEBSapqVUBLRrR3xgMYluq0wAOdL1--0qfB-Hy4wTZa5VpcH6hzV0z9QBfYaBo7y_O61RxOXUgkB3MQL5AADbHlji6FU0uZjEDrXqMf4hT5wVx0HHyjgzQoYCOoggiO7Ml8Dxb4r90m7neahnT0I8MNj8kqB_a4JJVUNUmlgGLxfUjFepf2w_L20hErkkTtw_brbRA3Ol7N5P01ejGp_tZniR8RyqUBBIs7nfRe2Yq2qrHqc9e3qN2VQuYU_syutSH-9lEZhkhlw25P8oNjlsRgAtsYH9fp770aAGmh-bjCvFi1BinXzHa0mGUktA88metV-DBpR5zyBeWW6HI6w12RmVWRSYE-sY2twuOZZ9jEBlj6tE5tumQn-w0eO-Gr7o8JUtqyNMqoRMpYkn2xNlWcjl6JfTMDODMwhugfEQ_snXSpwHxmQeN_wO83LZhPtr9W819rr8skR75wlB6lCiPMDZ3gvvX7uTfXXEMYTh1NrIVtVo2M1gyR7YZuwDJEQbwvlA=w1558-h1039-s-no?authuser=0"
                    alt="Jenzabar Website"
                  />
                  <figcaption>
                    <div>Jenzabar</div>
                    <span>Education</span>
                  </figcaption>
                </figure>
              </Link>
            </GridItem>
          </Grid>
          <Heading as={'h3'} size={'md'} mb={4}>
            My Works
          </Heading>
          Explore more my works on:{' '}
          <Link href="https://macodeid.com/projects" color={'primary'}>
            Macodeid
          </Link>
        </Box>
      </Container>
    </Layout>
  )
}

export default AboutPage
