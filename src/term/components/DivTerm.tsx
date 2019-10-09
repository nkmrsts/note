import { makeStyles, Theme, Typography } from '@material-ui/core'
import React, { Fragment, FunctionComponent } from 'react'

const DivTerm: FunctionComponent = () => {
  const classes = useStyles()

  return (
    <Fragment>
      <Typography className={classes.headingText} component={'p'}>
        {
          '本利用規約（以下、本規約）には、本サービスの提供条件及び当サービスの運営チームと登録ユーザーの皆様との間の権利義務関係が定められています。本サービスの利用に際しては、本規約の全文をお読みいただいた上で、本規約に同意いただく必要があります。'
        }
      </Typography>

      <div>
        <Typography className={classes.title} component={'h2'} variant={'h6'}>
          {'第1条（適用）'}
        </Typography>
        <Typography className={classes.text} component={'p'}>
          {
            '本規約は、Noat（以下、本サービス）の提供条件及び本サービスの利用に関する運営チームと登録ユーザーとの間の権利義務関係を定めることを目的とし、登録ユーザーと運営チームとの間の本サービスの利用にかかわる一切の関係に適用されます。本規約の内容とその他の本規約外における本サービスの説明等とが異なる場合は、本規約の規定が優先して適用されるものとします。'
          }
        </Typography>
      </div>
      <div>
        <Typography className={classes.title} component={'h2'} variant={'h6'}>
          {'第2条（定義）'}
        </Typography>
        <Typography className={classes.text} component={'p'}>
          {
            '本規約において使用する以下の用語は、各々以下に定める意味を有するものとします。「サービス利用規約」とは、本規約および運営チームと登録ユーザーの間で締結する、本サービスの利用規約を意味します。「知的財産権」とは、著作権、特許権、実用新案権、意匠権、商標権その他の知的財産権（それらの権利を取得し、またそれらの権利につき登録等を出願する権利を含みます。）を意味します。「運営チーム」とは、Noatの運営チームを意味します。「登録ユーザー」とは、第3条（登録）に基づいて本サービスの利用者としての登録がなされた個人または法人を意味します。「本サービス」とは、Noatという名称のサービス（理由の如何を問わずサービスの名称または内容が変更された場合は、当該変更後のサービスを含みます。）を意味します。'
          }
        </Typography>
      </div>
      <div>
        <Typography className={classes.title} component={'h2'} variant={'h6'}>
          {'第3条（登録）'}
        </Typography>
        <Typography className={classes.text} component={'p'}>
          {
            '本サービスの利用を希望するもの（以下「登録希望者」といいます。）は、本規約を尊守することに同意し、かつ運営チームの定める一定の情報（以下「登録事項」といいます。）を運営チームの定める方法で運営チームに提供することにより、運営チームに対し、本サービスの利用を申請することができます。運営チームは、登録申請者が以下の各号のいずれかの事由に該当する場合は、登録及び再登録を拒否することがあり、またその理由について一切開示義務を負いません。登録希望者が過去運営チームとの契約に違反した者またはその関係者であると運営チームが判断した場合第6条に定める措置を受けたことがある場合その他、運営チームが登録を適当でないと判断した場合'
          }
        </Typography>
      </div>
      <div>
        <Typography className={classes.title} component={'h2'} variant={'h6'}>
          {'第4条（パスワード及びユーザーIDの管理）'}
        </Typography>
        <Typography className={classes.text} component={'p'}>
          {
            '登録ユーザーは、事故の責任において、本サービスに関するパスワード及びユーザーIDを適切に管理及び保管するものとし、これを第三者に利用させ、または貸与、譲渡、名義変更、売買等をしてはならないものします。パスワードまたはユーザーIDの管理不十分、使用上の過誤、第三者の使用等によって生じた損害に関する責任は登録ユーザーが負うものとし、運営チームは一切の責任を負いません。'
          }
        </Typography>
      </div>
      <div>
        <Typography className={classes.title} component={'h2'} variant={'h6'}>
          {'第5条（禁止事項）'}
        </Typography>
        <Typography className={classes.text} component={'p'}>
          {
            '登録ユーザーは、本サービスの利用にあたり、以下の各号のいずれかに該当する行為または該当すると運営チームが判断する行為をしてはなりません。法令に違反する行為または犯罪行為に関連する行為運営チーム、本サービスのほかの利用者またはその他の第三者に対する詐欺または脅迫行為、公序良俗に反する行為、運営チーム、本サービスの他の利用者またはその他の第三者の知的財産権、肖像権、プライバシーの権利、名誉、その他の権利または利益を侵害する行為、本サービスのネットワークまたはシステム等に過度な負荷を掛ける行為、本サービスの運営を妨害するおそれのある行為、運営チームのネットワークまたはシステム等に不正にアクセスし、または不正なアクセスを試みる行為、第三者に成りすます行為、本サービスの他の利用者のIDまたはパスワードを利用する行為、本サービスの他の利用者の情報の収集、本サービスの他の利用者またはその他の第三者に不利益、損害、不快感を与える行為、反社会的勢力への利益供与、前各号の行為を直接または間接に惹起し、また容易にする行為、その他、運営チームが不適切と判断する行為'
          }
        </Typography>
      </div>
      <div>
        <Typography className={classes.title} component={'h2'} variant={'h6'}>
          {'第6条（本サービスの停止等）'}
        </Typography>
        <Typography className={classes.text} component={'p'}>
          {
            '運営チームは、以下のいずれかに該当する場合には、登録ユーザーに事前に通知することなく、本サービスの全部または一部の提供を停止または中断することができるものとします。本サービスに係るコンピューター・システムの点検または保守作業を緊急に行う場合、コンピューター、通信回線等が事故により停止した場合、地震、落雷、火災、風水害、天災地変などの不可抗力により本サービスの運営ができなくなった場合、その他、運営チームが停止または中断を必要と判断した場合、運営チームは、本条に基づき運営チームが行った措置に基づき登録ユーザーに生じた損害について一切の責任を負いません。'
          }
        </Typography>
      </div>
      <div>
        <Typography className={classes.title} component={'h2'} variant={'h6'}>
          {'第7条（投稿データに関する権利帰属）'}
        </Typography>
        <Typography className={classes.text} component={'p'}>
          {
            '運営チームは、以下のいずれかに該当する場合には、登録ユーザーに事前に通知することなく、本サービスの全部または一部の提供を停止または中断することができるものとします。本サービスに係るコンピューター・システムの点検または保守作業を緊急に行う場合、コンピューター、通信回線等が事故により停止した場合、地震、落雷、火災、風水害、天災地変などの不可抗力により本サービスの運営ができなくなった場合、その他、運営チームが停止または中断を必要と判断した場合、運営チームは、本条に基づき運営チームが行った措置に基づき登録ユーザーに生じた損害について一切の責任を負いません。'
          }
        </Typography>
      </div>
      <div>
        <Typography className={classes.title} component={'h2'} variant={'h6'}>
          {'第8条（投稿データの掲載について）'}
        </Typography>
        <Typography className={classes.text} component={'p'}>
          {
            '運営チームは、登録ユーザーが投稿したコンテンツについて、「https://」のドメイン下 のページに掲載することが不適切であると判断した場合は、事前に通知または催告することなく、「https://」のドメイン下 の任意のページから、該当コンテンツを非表示にすることができます。'
          }
        </Typography>
      </div>
      <div>
        <Typography className={classes.title} component={'h2'} variant={'h6'}>
          {'第9条（登録抹消等）'}
        </Typography>
        <Typography className={classes.text} component={'p'}>
          {
            '運営チームは、登録ユーザーが、以下の各号のいずれかの事由に該当する場合は、事前に通知または催告することなく、当該登録ユーザーについて本サービスの利用を一時的に停止し、または登録ユーザーとしての登録を抹消、もしくはサービス利用契約を解除することができます。本規約のいずれかの条項に違反した場合、登録事項に虚偽の事実があることが判明した場合、支払い停止もしくは支払い不能となり、または破産手続き開始、民事再生手続き開始、会社更生手続き開始、特別清算開始若しくはこれらに類する手続き開始の申し立てがあった場合、6カ月以上本サービスの利用がない場合、運営チームからの問い合わせその他の回答を求める連絡に対して30日間以上応答がない場合、第3条第4項各号に該当する場合、その他、運営チームが本サービスの利用、登録ユーザーとしての登録、またはサービスの利用契約の継続を適切でないと判断した場合、前項各号のいずれかの事由に該当した場合、登録ユーザーは、運営チームに対して負ている債務の一切について当然に期限の利益を失い、ただちに運営チームに対して全ての債務の支払を行わなければなりません。運営チームは、本条に基づき運営チームが行った行為により登録ユーザーに生じた損害について一切の責任を負いません。'
          }
        </Typography>
      </div>
      <div>
        <Typography className={classes.title} component={'h2'} variant={'h6'}>
          {'第10条（退会）'}
        </Typography>
        <Typography className={classes.text} component={'p'}>
          {
            '登録ユーザーは、運営チーム所定の方法により、本サービスから退会し、自己の登録ユーザーとしての登録を抹消することができます。'
          }
        </Typography>
      </div>
      <div>
        <Typography className={classes.title} component={'h2'} variant={'h6'}>
          {'第11条（利用者情報の扱い）'}
        </Typography>
        <Typography className={classes.text} component={'p'}>
          {
            '運営チームによる登録ユーザーの利用者情報の取扱いについては、別途運営チームのプライバシーポリシーの定めによるものとし、登録ユーザーはこのプライバシーポリシーに従って運営チームが登録ユーザーの利用者情報を扱うことについて同意するものとします。運営チームは、登録ユーザーが運営チームの提供した情報、データ等を、個人を特定できない形での統計的な情報として、運営チームの裁量で、利用及び公開することができるものとし、登録ユーザーはこれに異議を唱えないものとします。'
          }
        </Typography>
      </div>
      <div>
        <Typography className={classes.title} component={'h2'} variant={'h6'}>
          {'第12条（サービスの利用契約上の地位の譲渡等）'}
        </Typography>
        <Typography className={classes.text} component={'p'}>
          {
            '登録ユーザーは、運営チームの書面による事前の承諾なく、利用契約上の地位または本契約に基づく権利もしくは義務につき、第三者に対し、譲渡、移転、担保設定、その他の処分をすることはできません。運営チームは本サービスにかかる事業を他社に譲渡した場合には、当該事業譲渡に伴い利用契約上の地位、本規約に基づく権利及び義務並びに登録ユーザーの登録事項その他の顧客情報を当該事業譲渡の譲受人に譲渡することができるものとし、登録ユーザーは、掛かる譲渡につき、本項において定め同意したものとします。'
          }
        </Typography>
      </div>
      <div>
        <Typography className={classes.title} component={'h2'} variant={'h6'}>
          {'第13条（規約・サービスの変更等）'}
        </Typography>
        <Typography className={classes.text} component={'p'}>
          {
            '・本規約は、予告なしに変更されることがあります。規約の変更にあたって、運営チームが大幅な変更と判断した場合を除いて、ユーザーの皆様に通知をすることはございません。ご利用の際には随時、最新の利用規約をご参照ください。'
          }
        </Typography>
      </div>
      <div>
        <Typography className={classes.title} component={'h2'} variant={'h6'}>
          {'第14条（準拠法及び管轄裁判所）'}
        </Typography>
        <Typography className={classes.text} component={'p'}>
          {
            '本規約およびサービスの利用契約上の準拠法は日本法とします。なお、本サービスにおいて物品の売買が発生する場合であっても、国際物品売買契約に関する国際連合条約の適用を排除することに合意します。本規約またはサービス利用契約に起因し、または関連する一切の紛争については、東京地方裁判所を第一審の専属的合意管轄裁判所とします。'
          }
        </Typography>
      </div>
    </Fragment>
  )
}

const useStyles = makeStyles<Theme>(({ spacing }) => {
  return {
    root: { display: 'grid', height: '100vh' },
    headingTitle: { fontWeight: 'bold', textAlign: 'center' },
    headingText: { marginTop: spacing(4), marginBottom: spacing(4) },
    title: { fontWeight: 'bold', textAlign: 'left' },
    text: { marginTop: spacing(1), marginBottom: spacing(2) }
  }
})

export default DivTerm
