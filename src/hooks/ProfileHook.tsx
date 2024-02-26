import api from './api'

type profileType = {
  fullName: string
  email: string
  totalContacts: number
  totalAcceptedCards: number
  totalPendingCards: number
}

export type respType = {
  profileDetails?: profileType
  statusCode: string
}
export async function getProfileDetails(
  user_id: string,
  jwtToken: string,
): Promise<respType> {
  let statusCode: string = ''
  let profileDetails: profileType

  console.log(user_id, jwtToken)

  try {
    const logInResponse = await api.get(
      `api/v1/getProfile?user_id=${user_id}`,
      {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      },
    )
    statusCode = logInResponse.status.toString()

    profileDetails = logInResponse.data
    console.log('profileDetails are ', profileDetails, statusCode)
    return {profileDetails, statusCode}
  } catch (error: any) {
    console.log('Error while fetching profileData in:', error)
    return {statusCode}
  }
}

/////////////////////////////////////////////////////////////////////////////////

export async function getContactList(user_id: string, jwtToken: string) {
  let statusCode: string = ''
  let CardList = []

  try {
    const getContactListResponse = await api.get(
      `api/v1/getContactList?user_id=${user_id}`,
      {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      },
    )
    statusCode = getContactListResponse.status.toString()

    CardList = getContactListResponse.data
    console.log('profileDetails are ', CardList, statusCode)
    return {CardList, statusCode}
  } catch (error: any) {
    console.log('Error while fetching profileData in:', error)
    return {statusCode}
  }
}
