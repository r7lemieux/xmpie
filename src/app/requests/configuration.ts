export const xmpieConfiguration = {
  'Job': {
    'JobType': 'Proof',
    'Context': {
      'CampaignId': 1
    },
    'Priority': 'Immediately',
    'DisableTurbo': true
  },
  'Data': {
    'Range': {
      'From': 1,
      'To': 1
    },
    'RecipientsDataSources': [
      {
        'Id': 1,
        'FilterType': 'TableName',
        'Filter': 'Customers'
      }
    ],
    'Assets': {
      'UseCampaignAssetSources': true,
      'Media': 'Print'
    }
  },
  'Plan': {
    'Id': 0
  },
  'Document': {
    'Id': 0,
    'ResourcesFolder': '\\Resources',
    'Fonts': {
      'UseCampaignFonts': true
    }
  },
  'Output': {
    'Format': 'JPG',
    'FileName': {
      'Name': 'demo1filename',
      'AppendJobId': true
    },
    'Bleed': {
      'Top': 0,
      'Bottom': 0,
      'LeftOrInside': 0,
      'RightOrOutside': 0
    },
    'PdfSettings': 'XMPiEQualityProof',
    'Resolution': 300,
    'ProductionPolicies': {
      'MissingFonts': 'Ignore',
      'MissingAssets': 'Ignore',
      'MissingStyles': 'Ignore',
      'TextOverflow': 'Ignore',
      'FileSizeLimitReached': 'Ignore'
    }
  }
};
